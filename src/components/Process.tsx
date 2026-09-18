"use client";

import { motion } from "framer-motion";
import {
  Search,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "01 — Scope",
    title: "Discovery & scoping",
    desc: "We map your assets, exposure, and risk profile in a structured first pass.",
  },
  {
    icon: ScanSearch,
    label: "02 — Scan",
    title: "Threat assessment",
    desc: "Vulnerability scanning, attack-surface enumeration, and threat-intel correlation.",
  },
  {
    icon: ShieldAlert,
    label: "03 — Contain",
    title: "Detection & response",
    desc: "Alerts are triaged, verified, and contained through SOAR playbooks — automatically where safe.",
  },
  {
    icon: ShieldCheck,
    label: "04 — Harden",
    title: "Harden & report",
    desc: "Fixes prioritized by exploitability, with evidence and a compliance-ready report.",
  },
];

const stats = [
  { value: "24/7", label: "SOC monitoring" },
  { value: "<15 min", label: "Median response" },
  { value: "12,000+", label: "Threats contained" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Process() {
  return (
    <section id="process" className="relative border-y border-line bg-obsidian-light/40 py-24">
      <div className="cyber-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Four stages. Zero blind spots.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass-card relative rounded-xl p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
                  <s.icon className="h-4 w-4 text-cyan" />
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald/60" />
              </div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-cyan/80">
                {s.label}
              </p>
              <h3 className="mb-2 text-base font-semibold text-ink">{s.title}</h3>
              <p className="text-sm leading-6 text-ink-soft">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* stats band */}
        <div id="stats" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card glow-border rounded-xl p-6 text-center"
            >
              <p className="font-mono text-3xl font-semibold text-cyan glow-text">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

