"use client";

import { createContext, useContext } from "react";
import type { T } from "./types";

const en: T = {
  navCapabilities: "Capabilities",
  navProcess: "Process",
  navStats: "Stats",
  navContact: "Contact",
  navCta: "Request a scan",

  socOnline: "SOC online — 24/7",
  heroTitleA: "Defend the digital",
  heroTitleB: "attack surface.",
  heroDesc:
    "Digital Defensive delivers enterprise-grade detection and response: continuous monitoring, offensive validation, and automated containment — built for teams that can't afford downtime.",
  ctaScan: "Request a scan",
  ctaCaps: "Capabilities",
  iso: "ISO 27001 aligned",
  zt: "Zero-trust first",

  capsLabel: "Capabilities",
  capsTitle: "Full-spectrum defense, engineered in.",
  capsDesc:
    "From continuous monitoring to offensive validation, every layer of Digital Defensive is built to find what's hidden and stop it before it matters.",
  caps: [
    {
      title: "Continuous Monitoring",
      desc: "24/7 SOC coverage with real-time telemetry across your full attack surface.",
    },
    {
      title: "Offensive Validation",
      desc: "Red-team exercises and penetration testing that prove your controls actually hold.",
    },
    {
      title: "Automated Containment",
      desc: "SOAR-driven response that isolates threats in seconds, not hours.",
    },
    {
      title: "Threat Intelligence",
      desc: "Curated, actionable intel mapped to your stack — not noise.",
    },
  ],

  procLabel: "Process",
  procTitle: "How we work",
  proc: [
    {
      label: "01",
      title: "Recon",
      desc: "We map your external and internal attack surface before we touch a thing.",
    },
    {
      label: "02",
      title: "Detect",
      desc: "Continuous telemetry and behavioral baselining surface what's off.",
    },
    {
      label: "03",
      title: "Respond",
      desc: "Automated containment plus human analysts close the loop fast.",
    },
    {
      label: "04",
      title: "Harden",
      desc: "Post-incident hardening and validation that keeps the gap closed.",
    },
  ],

  stat1: "24/7",
  stat2: "10s",
  stat3: "99.9%",
  stat4: "500+",

  contactLabel: "Contact",
  contactTitle: "Ready when you are",
  contactDesc:
    "Tell us about your environment and what you're worried about. We'll respond within one business day.",
  name: "Name",
  namePh: "Jane Doe",
  email: "Email",
  emailPh: "jane@company.com",
  org: "Organization",
  orgPh: "Company Inc.",
  message: "Message",
  messagePh: "What are you looking to protect or validate?",
  sendBtn: "Send message",
  sending: "Sending…",
  sentTitle: "Message received",
  sentBody: "We'll be in touch within one business day.",

  footDesc:
    "Enterprise-grade detection, validation, and containment for teams that can't afford downtime.",
  footCaps: "Capabilities",
  footCompany: "Company",
  footCap1: "Continuous Monitoring",
  footCap2: "Offensive Validation",
  footCap3: "Automated Containment",
  footCap4: "Threat Intelligence",
  footProcess: "Process",
  footStats: "Stats",
  footContact: "Contact",
  footCareers: "Careers",
  footPrivacy: "Privacy",
  footTerms: "Terms",
  allSys: "All systems operational",
};

const I18nCtx = createContext<T>(en);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nCtx.Provider value={en}>{children}</I18nCtx.Provider>;
}

export const useT = () => useContext(I18nCtx);
