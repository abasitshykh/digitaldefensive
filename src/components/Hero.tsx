"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Lock,
} from "lucide-react";

const termLines = [
  { text: "$ nmap -sV --script vuln 192.168.4.10", delay: 0.4 },
  { text: "PORT   STATE  SERVICE     VERSION", delay: 1.2 },
  { text: "80/tcp open  http        nginx 1.24.0", delay: 1.8 },
  { text: "443/tcp open https       nginx 1.24.0", delay: 2.2 },
  { text: "3389/tcp open rdp         Terminal Services", delay: 2.8 },
  { text: "[!] 12 findings - 3 critical - 4 high", delay: 3.4 },
  { text: "$ dd-soc --contain --notify", delay: 4.2 },
  { text: "✔ containment complete · 00:42", delay: 5.0 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop grid */}
      <div className="cyber-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]"
          >
            Defend the digital
            <br />
            <span className="text-cyan glow-text">attack surface.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-7 text-ink-soft"
          >
            Digital Defensive delivers enterprise-grade detection and response:
            continuous monitoring, offensive validation, and automated
            containment — built for teams that can&apos;t afford downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Request a scan
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              Capabilities
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <span className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald" /> ISO 27001 aligned
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald" /> SOC 2 aligned
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
              <Lock className="h-3.5 w-3.5 text-cyan" /> Zero-trust first
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 border-t border-line pt-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
              In partnership with
            </p>
            <a
              href="https://nccs.neduet.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-3"
            >
              <ShieldCheck className="h-5 w-5 text-cyan transition-transform group-hover:scale-110" />
              <span className="font-mono text-sm font-medium tracking-wide text-ink-soft transition-colors group-hover:text-cyan">
                National Centre for Cyber Security
              </span>
              <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-ink-mute transition-colors group-hover:border-cyan/40 group-hover:text-cyan">
                NCCS
              </span>
            </a>
          </motion.div>
        </div>

        {/* terminal widget */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden rounded-xl shadow-[0_0_60px_rgba(0,240,255,0.06)]">
            <div
              className="absolute left-0 h-px w-full bg-cyan/60 scanline"
              aria-hidden
            />
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 flex items-center gap-2 font-mono text-xs text-ink-mute">
                <Terminal className="h-3 w-3" /> dd-soc - live
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              {termLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: line.delay, duration: 0.3 }}
                  className={
                    line.text.startsWith("[!]")
                      ? "text-red-400"
                      : line.text.startsWith("✔")
                        ? "text-emerald"
                        : line.text.startsWith("$")
                          ? "text-cyan"
                          : "text-ink-soft"
                  }
                >
                  {line.text}
                </motion.p>
              ))}
              <p className="text-cyan">
                $ <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-cyan" />
              </p>
            </div>
          </div>

          {/* pulse rings */}
          <div
            className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center"
            aria-hidden
          >
            <span className="pulse-ring absolute inset-0 rounded-full border border-cyan/40" />
            <span
              className="pulse-ring absolute inset-0 rounded-full border border-cyan/30"
              style={{ animationDelay: "0.7s" }}
            />
            <ShieldCheck className="relative h-6 w-6 text-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


