import type { Metadata } from "next";
import { plans } from "@/data/plans";

export const metadata: Metadata = {
  title: "Pricing | Engagement Plans from $650/mo | Digital Defensive",
  description:
    "Transparent cybersecurity pricing: Shield from $650/mo, Aegis $1,350/mo, Sovereign $6,500/yr. Penetration testing, MDR, compliance — all included.",
  keywords: [
    "managed security services pricing",
    "penetration testing cost",
    "MDR pricing",
    "cybersecurity services pricing",
    "SOC 2 compliance cost",
    "ISO 27001 consulting cost",
    "endpoint security pricing",
  ],
  alternates: { canonical: "/pricing" },
};

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

const comparison: { feature: string; shield: string | boolean; aegis: string | boolean; sovereign: string | boolean }[] = [
  { feature: "Monthly penetration test", shield: "1 system", aegis: "Full scope", sovereign: "Full scope + red team" },
  { feature: "24/7 SOC monitoring", shield: false, aegis: true, sovereign: true },
  { feature: "Endpoint detection & response", shield: false, aegis: "25 devices", sovereign: "5,000+ devices" },
  { feature: "Continuous attack-surface monitoring", shield: false, aegis: true, sovereign: true },
  { feature: "Incident response & containment", shield: false, aegis: "2 incidents/mo", sovereign: "Unlimited, 24/7" },
  { feature: "Compliance readiness (ISO/SOC 2)", shield: false, aegis: "Evidence support", sovereign: "Full audit prep" },
  { feature: "Dedicated security engineer", shield: false, aegis: false, sovereign: true },
  { feature: "Security awareness training", shield: false, aegis: true, sovereign: true },
  { feature: "Executive risk briefing", shield: false, aegis: false, sovereign: "Annual" },
  { feature: "Client portal & dashboard", shield: true, aegis: true, sovereign: true },
  { feature: "Support SLA", shield: "1 business day", aegis: "< 4 business hours", sovereign: "24/7 on-call" },
];

const faqs = [
  {
    q: "Is there a minimum contract length?",
    a: "Shield and Aegis are month-to-month — cancel anytime. Sovereign is an annual commitment with a 40%+ saving versus monthly Aegis billing. All plans include a scoping call before you commit.",
  },
  {
    q: "What's included in the free scoping call?",
    a: "A 30-minute call where we map your current security posture, identify the highest-risk gaps, and recommend the right plan. No obligation — you walk away with a written scope recommendation either way.",
  },
  {
    q: "Can we start with a one-time penetration test?",
    a: "Yes. One-time penetration tests are available from $650 for a single target system. It's the most common entry point — many clients start with a pentest and move to Aegis once they see the findings.",
  },
  {
    q: "Do prices include tax?",
    a: "Prices are pre-tax. Applicable sales tax or VAT is added at checkout based on your jurisdiction.",
  },
  {
    q: "What happens after we sign up?",
    a: "Day 1: scoping call and access setup. Day 2–5: initial attack-surface enumeration and baseline scan. Week 2: first findings delivered. You have a live client portal from day one — you can track every scan, every finding, every remediation in real time.",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Hero */}
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // engagement plans
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Security that scales
          <br />
          <span className="text-cyan">with your risk profile.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          No hidden fees, no per-incident surprises. Every plan includes client
          portal access, a dedicated point of contact, and a scoping call
          before you commit. Start with a one-time pentest from $650 or move
          straight into continuous coverage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Get a scoping call
          </a>
          <a
            href="/services/penetration-testing"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See pentest scope →
          </a>
        </div>
      </div>

      {/* Plans */}
      <section className="mt-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={
                p.featured
                  ? "glass-card glow-border relative flex flex-col rounded-xl p-7 ring-1 ring-cyan/40 shadow-[0_0_50px_rgba(0,240,255,0.10)]"
                  : "glass-card glow-border relative flex flex-col rounded-xl p-7"
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-cyan/40 bg-obsidian px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                  <SparklesIcon /> Most popular
                </span>
              )}

              <h2 className="font-mono text-sm uppercase tracking-[0.25em] text-ink-soft">
                {p.name}
              </h2>
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
                    {f.endsWith(", plus:") ? (
                      <span className="pt-1 font-mono text-[11px] uppercase tracking-widest text-cyan/80">+</span>
                    ) : (
                      <CheckIcon />
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
                href="/#contact"
                className={
                  p.featured
                    ? "mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                    : "mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-cyan/40 bg-cyan/5 px-5 py-3 font-mono text-sm uppercase tracking-widest text-cyan transition-all hover:bg-cyan/15 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                }
              >
                {p.cta}
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center font-mono text-xs text-ink-mute">
          One-time penetration tests available from $650. Custom enterprise
          scoping — ask us. All plans are cancel-anytime on monthly billing.
        </p>
      </section>

      {/* Comparison table */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          What&apos;s included
        </h2>
        <div className="mt-10 overflow-x-auto rounded-lg border border-line" style={{ background: "var(--card-bg)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-ink-mute">Feature</th>
                <th className="px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-cyan">
                  Shield
                  <span className="mt-1 block font-mono text-[10px] text-ink-mute">$650/mo</span>
                </th>
                <th className="px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-cyan">
                  Aegis
                  <span className="mt-1 block font-mono text-[10px] text-ink-mute">$1,350/mo</span>
                </th>
                <th className="px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-cyan">
                  Sovereign
                  <span className="mt-1 block font-mono text-[10px] text-ink-mute">$6,500/yr</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-b border-line last:border-0"
                  style={{ background: i % 2 === 0 ? "transparent" : "var(--accent-bg)" }}
                >
                  <td className="px-5 py-3 font-medium text-ink">{row.feature}</td>
                  {(["shield", "aegis", "sovereign"] as const).map((col) => {
                    const val = row[col];
                    return (
                      <td key={col} className="px-5 py-3 text-ink-soft">
                        {val === true ? <CheckIcon /> : val === false ? <span className="text-ink-mute">—</span> : val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* NCCS block */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            What makes our pricing different
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Most managed security providers charge per asset, per incident, or
            per analyst hour — making it hard to budget. Our pricing is fixed
            per plan, with no per-incident fees and no per-asset surcharges.
            The NCCS partnership means our threat intelligence and analyst
            training are baked into the price, not sold as an add-on.
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
              Not sure which plan fits?
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              A 30-minute scoping call will tell you exactly what you need.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Get a scoping call
          </a>
        </div>
      </section>
    </div>
  );
}
