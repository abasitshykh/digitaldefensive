export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: "mo" | "yr";
  cadence: "monthly" | "yearly";
  featured?: boolean;
  cta: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "shield",
    name: "Shield",
    tagline: "Essential protection for small teams",
    price: 650,
    period: "mo",
    cadence: "monthly",
    cta: "Start with Shield",
    features: [
      "Monthly external penetration test (1 target system)",
      "Web application security assessment (OWASP Top 10)",
      "Attack-surface enumeration & exposure mapping",
      "Monthly vulnerability scan with prioritized findings",
      "Client portal access & findings dashboard",
      "Email support (1 business-day response)",
    ],
  },
  {
    id: "aegis",
    name: "Aegis",
    tagline: "Continuous offensive & defensive coverage",
    price: 1350,
    period: "mo",
    cadence: "monthly",
    featured: true,
    cta: "Get Aegis",
    features: [
      "Everything in Shield, plus:",
      "Continuous attack-surface monitoring (EASM)",
      "Endpoint detection & response for up to 25 devices",
      "Managed SIEM monitoring with 24/7 alert triage",
      "Quarterly full-scope penetration test (network + web + cloud)",
      "Incident response & containment (2 incidents/mo included)",
      "Security awareness training for your team",
      "Priority support (< 4 business hours)",
    ],
  },
  {
    id: "sovereign",
    name: "Sovereign",
    tagline: "Full-spectrum defense, annually",
    price: 6500,
    period: "yr",
    cadence: "yearly",
    cta: "Go Sovereign",
    features: [
      "Everything in Aegis, on an annual commitment, plus:",
      "Unlimited continuous monitoring & threat hunting",
      "Dedicated security engineer & quarterly war-gaming",
      "Red team exercise once per year (full kill-chain)",
      "Compliance readiness: ISO 27001 / SOC 2 evidence support",
      "Unlimited incident response with 24/7 on-call",
      "Annual executive risk briefing",
      "40%+ saving vs. monthly Aegis billing",
    ],
  },
];
