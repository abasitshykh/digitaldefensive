import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOAR Playbooks & Security Automation | Digital Defensive",
  description:
    "Shuffle-powered SOAR playbooks: automated containment, alert triage, and auditable incident response. Turn alert noise into contained incidents.",
  keywords: [
    "SOAR playbooks",
    "security automation",
    "Shuffle SOAR",
    "automated incident response",
    "alert triage automation",
    "security orchestration",
    "playbook automation",
    "incident response automation",
  ],
  alternates: { canonical: "/services/soar-automation" },
};

const playbooks = [
  {
    name: "Host Isolation",
    desc: "On confirmed endpoint compromise: network isolate, kill malicious process, collect forensics, open ticket — in under 90 seconds, fully audited.",
  },
  {
    name: "Credential Revocation",
    desc: "When a credential is identified as compromised: revoke session, force password reset, invalidate tokens, notify user — across AD, SaaS, and cloud IdP.",
  },
  {
    name: "IOC Blocking",
    desc: "New IOCs from threat intelligence are pushed to firewalls, EDR, and proxy within minutes. No manual ticket, no waiting for a change window.",
  },
  {
    name: "Phishing Triage",
    desc: "User-reported phishing emails are automatically parsed, IOCs extracted, linked to threat intel, and responded to — with a human decision point only where needed.",
  },
  {
    name: "Data Exfiltration Containment",
    desc: "When anomalous outbound transfer is detected: session terminate, egress block, evidence capture, and forensics collection in a single automated sequence.",
  },
  {
    name: "Alert Enrichment & Routing",
    desc: "Every alert is enriched with asset criticality, user context, threat intel, and historical behaviour before it reaches an analyst. Reduces false-positive noise by 70%+.",
  },
];

const faqs = [
  {
    q: "What is SOAR and why do we need it?",
    a: "SOAR (Security Orchestration, Automation, and Response) is the layer that turns a security alert into an automated action. Without it, every alert requires a human to make a decision, run a playbook, and log the result. With it, the response is in seconds — and the audit trail is automatic.",
  },
  {
    q: "Why Shuffle specifically?",
    a: "Shuffle is open-source, API-first, and designed for security teams who want full control. It has 200+ pre-built integrations (SIEM, EDR, IdP, cloud, ticketing), a visual playbook builder, and a full audit log of every action. No vendor lock-in, no per-execution cost.",
  },
  {
    q: "Can playbooks be customised to our environment?",
    a: "Yes. Every engagement starts with a playbook design session where we map your incident response procedures to automated sequences. You approve every playbook before it is activated. No black-box automation.",
  },
  {
    q: "How is this different from just having a SIEM?",
    a: "A SIEM detects. SOAR responds. Without the SOAR layer, your SIEM produces alerts that sit in a queue until an analyst is free. With it, the response is automatic, consistent, and documented — regardless of whether an analyst is at their desk.",
  },
];

export default function SOARPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // SOAR &amp; automation
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          SOAR Playbooks
          <br />
          <span className="text-cyan">that respond before you do.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          The gap between detection and response is where breaches succeed.
          Our SOAR layer closes that gap: Shuffle-powered playbooks that
          isolate compromised hosts, revoke credentials, block IOCs, and
          collect evidence — automatically, consistently, and with a full
          audit trail.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Design our playbooks
          </a>
          <a
            href="/services/managed-detection-response"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See MDR →
          </a>
        </div>
      </div>

      {/* Playbooks */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Core playbooks
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-soft">
          Every playbook is customised to your environment, approved by you
          before activation, and fully audited after every execution.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {playbooks.map((p) => (
            <div key={p.name} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Shuffle */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            Why Shuffle?
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Open Source
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Self-hosted or cloud. No per-execution cost, no vendor
                lock-in, full code audit available.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                200+ Integrations
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                SIEM, EDR, IdP, cloud, ticketing, chatops — all connected in
                one playbook, no glue code required.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Full Audit Trail
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Every action, every parameter, every result — logged and
                queryable. Your auditor will thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NCCS */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            NCCS threat context
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Playbooks are not generic — they are informed by NCCS threat
            intelligence. When a new campaign is identified, the corresponding
            IOC blocking and containment playbooks are updated and tested
            against your environment within hours, not days.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-line"
              style={{ background: "var(--card-bg)" }}
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-mono text-sm font-medium text-ink transition-colors group-open:text-cyan">
                {f.q}
              </summary>
              <p className="px-5 pb-4 text-sm leading-6 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 border-t border-line pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">
              Turn your incident response into automation
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Playbook design session included with every MDR engagement.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Design our playbooks
          </a>
        </div>
      </section>
    </div>
  );
}
