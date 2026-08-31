"use client";

import { motion } from "framer-motion";
import { Shield, ArrowUp, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    heading: "Capabilities",
    links: [
      { label: "Managed Detection", href: "#capabilities" },
      { label: "Pen Testing", href: "#capabilities" },
      { label: "Security Audits", href: "#capabilities" },
      { label: "EDR Fleet", href: "#capabilities" },
    ],
  },
  {
    heading: "Pricing",
    links: [
      { label: "Shield — $650/mo", href: "#pricing" },
      { label: "Aegis — $1,350/mo", href: "#pricing" },
      { label: "Sovereign — $6,500/yr", href: "#pricing" },
      { label: "Client portal", href: "/portal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-obsidian-light/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan/30 bg-cyan/5">
                <Shield className="h-4 w-4 text-cyan" />
              </span>
              <span className="font-mono text-sm tracking-widest text-ink">
                DIGITAL<span className="text-cyan">DEFENSIVE</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-ink-soft">
              Enterprise-grade cybersecurity: managed detection &amp; response,
              penetration testing, security audits, and 24/7 SOC monitoring.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-line font-mono text-[11px] text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                in
              </a>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-mute">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-soft transition-colors hover:text-cyan"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-ink-mute">
            © {new Date().getFullYear()} Digital Defensive. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-xs text-ink-mute hover:text-cyan">
              Privacy
            </a>
            <a href="#" className="font-mono text-xs text-ink-mute hover:text-cyan">
              Terms
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

