"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  Radar,
  FileSearch,
  Server,
  ShieldCheck,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Radar,
    title: "Managed Detection & Response",
    desc: "24/7 SOC monitoring with automated triage and containment. Mean time to respond under 15 minutes.",
  },
  {
    icon: Crosshair,
    title: "Penetration Testing",
    desc: "Offensive validation of your network, web apps, and cloud — reported in plain language with prioritized fixes.",
  },
  {
    icon: FileSearch,
    title: "Security Audits & Assessments",
    desc: "Gap analysis, policy review, and compliance readiness mapped to ISO 27001, SOC 2, and local frameworks.",
  },
  {
    icon: ShieldCheck,
    title: "Endpoint Detection & Response",
    desc: "Velociraptor-based EDR fleet with remote forensics, timeline reconstruction, and threat hunting.",
  },
  {
    icon: Server,
    title: "Threat Intelligence",
    desc: "Curated intel feeds, IOC enrichment, and adversary tracking focused on threats active in your region.",
  },
  {
    icon: Workflow,
    title: "SOAR Playbooks",
    desc: "Shuffle-powered automation that turns alert noise into contained incidents and auditable evidence.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            // capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Full-spectrum defense, one partner
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            From continuous monitoring to offensive validation — every service
            feeds the same pipeline, so nothing slips through the gaps.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-card glow-border group rounded-xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
                <s.icon className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-ink">
                {s.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
              </h3>
              <p className="text-sm leading-6 text-ink-soft">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

