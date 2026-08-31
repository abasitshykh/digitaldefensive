import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED = ["name", "email", "message"];

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br/>");
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const org = (body.org ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  const missing = REQUIRED.filter((k) => !(body as any)[k] || !String((body as any)[k]).trim());
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }
  if (!validEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = String(process.env.SMTP_SECURE ?? "true") === "true";
  const user = process.env.SMTP_USER;
  const key = process.env.SMTP_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!host || !user || !key || !from || !to) {
    console.error("[contact] Missing SMTP env vars");
    return NextResponse.json(
      { ok: false, error: "Mail service is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass: key },
    tls: { rejectUnauthorized: false },
  });

  const date = new Date().toUTCString();
  const text = [
    "New contact form submission",
    "----------------------------------------",
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Org:         ${org || "-"}`,
    `Date:        ${date}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
  <div style="font-family:Segoe UI,Arial,sans-serif;color:#1f2937;background:#f9fafb;padding:24px;border-radius:8px">
    <h2 style="margin:0 0 4px;font-size:18px;color:#0f172a">New contact form submission</h2>
    <p style="margin:0 0 20px;font-size:12px;color:#6b7280">${date}</p>
    <table style="width:100%;border-collapse:collapse;margin-bottom:18px">
      <tr>
        <td style="padding:8px 0;font-size:13px;color:#6b7280;width:110px">Name</td>
        <td style="padding:8px 0;font-size:14px;color:#0f172a;font-weight:600">${esc(name)}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;font-size:13px;color:#6b7280">Email</td>
        <td style="padding:8px 0;font-size:14px;color:#0f172a"><a href="mailto:${esc(email)}" style="color:#0891b2">${esc(email)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;font-size:13px;color:#6b7280">Org</td>
        <td style="padding:8px 0;font-size:14px;color:#0f172a">${org ? esc(org) : "—"}</td>
      </tr>
    </table>
    <div style="border-top:1px solid #e5e7eb;padding-top:16px">
      <p style="margin:0 0 8px;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em">Message</p>
      <p style="margin:0;font-size:14px;color:#1f2937;line-height:1.6">${esc(message)}</p>
    </div>
    <p style="margin:24px 0 0;font-size:11px;color:#9ca3af">Sent from the Digital Defensive contact form.</p>
  </div>`;

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: `"Digital Defensive" <${from}>`,
      to,
      replyTo: email,
      subject: `[Digital Defensive] Contact form — ${name}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[contact] send failed:", detail);
    return NextResponse.json(
      { ok: false, error: "Failed to send email. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
