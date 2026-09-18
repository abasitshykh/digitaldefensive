"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Contact() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => {
      data[k] = String(v);
    });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Request failed");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan/8 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {t.contactTitle}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
            {t.contactDesc}
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
                <Mail className="h-4 w-4 text-cyan" />
              </span>
              <span className="font-mono text-sm text-ink-soft">
                secure@digitaldefensive.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
                <MapPin className="h-4 w-4 text-cyan" />
              </span>
              <span className="font-mono text-sm text-ink-soft">Portugal</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-xl p-7"
        >
          {sent ? (
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="mb-4 h-12 w-12 text-emerald" />
              <h3 className="text-lg font-semibold text-ink">{t.sentTitle}</h3>
              <p className="mt-2 max-w-xs font-mono text-sm text-ink-soft">{t.sentBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft"
                  >
                    {t.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                    placeholder={t.namePh}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft"
                  >
                    {t.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                    placeholder={t.emailPh}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="org"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft"
                >
                  {t.org}
                </label>
                <input
                  id="org"
                  name="org"
                  className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                  placeholder={t.orgPh}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft"
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                  placeholder={t.messagePh}
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] disabled:opacity-50"
              >
                {sending ? t.sending : t.sendBtn}
                {!sending && <Send className="h-4 w-4" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

