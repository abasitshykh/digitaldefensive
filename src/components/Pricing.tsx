"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { plans } from "@/data/plans";

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-line py-24">
      <div className="cyber-grid absolute inset-0 opacity-40" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan/8 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Security that scales with you
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Transparent, fixed pricing. Every plan includes client portal access,
            a dedicated point of contact, and a scoping call before we begin.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={
                p.featured
                  ? "glass-card glow-border relative flex flex-col rounded-xl p-7 ring-1 ring-cyan/40 shadow-[0_0_50px_rgba(0,240,255,0.10)]"
                  : "glass-card glow-border relative flex flex-col rounded-xl p-7"
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-cyan/40 bg-obsidian px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}

              <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-ink-soft">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-ink-mute">{p.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-4xl font-semibold text-ink">
                  ${p.price.toLocaleString()}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                  / {p.period === "mo" ? "month" : "year"}
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-6">
                    {f.endsWith(", plus:") || f === "Everything in Shield, plus:" ? (
                      <span className="pt-1 font-mono text-[11px] uppercase tracking-widest text-cyan/80">
                        +
                      </span>
                    ) : (
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-emerald"
                        strokeWidth={2.5}
                      />
                    )}
                    <span
                      className={
                        f.endsWith(", plus:")
                          ? "font-mono text-[11px] uppercase tracking-widest text-ink-soft"
                          : "text-ink-soft"
                      }
                    >
                      {f.replace(", plus:", "")}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={
                  p.featured
                    ? "mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                    : "mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-cyan/40 bg-cyan/5 px-5 py-3 font-mono text-sm uppercase tracking-widest text-cyan transition-all hover:bg-cyan/15 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                }
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center font-mono text-xs text-ink-mute"
        >
          One-time penetration tests available from $650. Custom enterprise
          scoping — ask us. All plans are cancel-anytime on monthly billing.
        </motion.p>
      </div>
    </section>
  );
}

