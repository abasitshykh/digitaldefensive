"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-card border-b border-line"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-mono text-sm tracking-widest text-ink">
            DIGITAL<span className="text-cyan">DEFENSIVE</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/portal"
            className="rounded-md border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            Client portal
          </Link>
          <a
            href="#pricing"
            className="rounded-md border border-cyan/40 bg-cyan/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cyan transition-all hover:bg-cyan/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            View plans
          </a>
        </div>

        <button
          className="md:hidden text-ink-soft"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-line px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-widest text-ink-soft hover:text-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/portal"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md border border-line px-4 py-2 font-mono text-sm uppercase tracking-widest text-ink-soft"
              >
                Client portal
              </Link>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md border border-cyan/40 bg-cyan/10 px-4 py-2 font-mono text-sm uppercase tracking-widest text-cyan"
              >
                View plans
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

