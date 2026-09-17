import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Detection & Response (MDR) | 24/7 SOC | Digital Defensive",
  description:
    "24/7 managed detection and response with sub-15-minute response time. Threat hunting, automated containment, SOAR playbooks. In partnership with NCCS.",
  keywords: [
    "managed detection and response",
    "MDR services",
    "24/7 SOC monitoring",
    "threat hunting",
    "automated containment",
    "SOAR playbooks",
    "mean time to respond",
    "security operations center",
  ],
  alternates: { canonical: "/services/managed-detection-response" },
};

const stats = [
  { value: "<15 min", label: "Mean time to respond" },
  { value: "24/7", label: "SOC coverage" },
  { value: "99.9%", label: "Uptime commitment" },
  { value: "100%", label: "Incident triage rate" },
];

const capabilities = [
  {
    title: "Continuous Threat Monitoring",
    desc: "Real-time correlation of endpoint, network, and cloud telemetry against active threat intelligence. No gaps, no blind spots, no business-hours-only coverage.",
  },
  {
    title: "Automated Triage & Containment",
    desc: "SOAR playbooks powered by Shuffle isolate compromised endpoints, revoke sessions, and block IOCs — before an analyst has to make a judgment call.",
  },
  {
    title: "Threat Hunting",
    desc: "Hypothesis-driven hunts across your environment targeting adversary tactics observed in your threat cluster, not generic signature sweeps.",
  },
  {
    title: "Incident Reporting & Evidence",
    desc: "Every incident produces a forensically sound timeline, root-cause analysis, and board-ready summary. Auditable by design.",
  },
];

const faqs = [
  {
    q: "How is MDR different from a traditional SOC?",
    a: "A traditional SOC monitors alerts. MDR hunts. We combine 24/7 monitoring with offensive threat intelligence and automated response — so the goal is not just detection, but contained incidents with zero dwell time.",
  },
  {
    q: "What is your mean time to respond (MTTD/MTTR)?",
    a: "Our mean time to respond is under 15 minutes from alert to analyst action. Automated containment for known-bad IOCs operates in seconds, not minutes.",
  },
  {
    q: "Do you work with our existing SIEM or EDR tools?",
    a: "Yes. We integrate with your existing stack where possible and deploy Velociraptor EDR where it doesn't exist. We don't force a rip-and-replace.",
  },
  {
    q: "Who is the National Centre for Cyber Security (NCCS)?",
    a: "NCCS is our institutional partner — a national cybersecurity research centre that provides the threat intelligence foundation, adversary tracking, and regional threat context underpinning our MDR service.",
  },
];

export default function MDRPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Hero */}
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // managed detection &amp; response
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Managed Detection &amp; Response
          <br />
          <span className="text-cyan">that responds in minutes.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Digital Defensive operates a 24/7 managed detection and response
          service built for organisations that cannot afford the gap between
          detection and containment. Our analysts, automated playbooks, and
          NCCS-backed threat intelligence work as one pipeline — so your
          security posture is enforced continuously, not just during
          business hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Request a scan
          </a>
          <a
            href="/services/penetration-testing"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See penetration testing →
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="glass-card glow-border rounded-xl p-6"
          >
            <p className="text-3xl font-semibold text-cyan">{s.value}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-mute">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* What you get */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          What you get
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="glass-card glow-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical stack */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Technical foundation
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "Velociraptor EDR",
              detail:
                "Open-source, enterprise-grade endpoint detection. Remote forensics, timeline reconstruction, threat hunting at fleet scale.",
            },
            {
              name: "Shuffle SOAR",
              detail:
                "Playbook-driven automation: isolate host, revoke session, block IOC, open ticket — in under 90 seconds, with full audit trail.",
            },
            {
              name: "NCCS Threat Intelligence",
              detail:
                "Region-specific adversary tracking, curated IOC feeds, and campaign attribution from the National Centre for Cyber Security.",
            },
            {
              name: "Wazuh / Zeek / Suricata",
              detail:
                "Host-based and network-based detection layers. Full packet capture, protocol awareness, and alert correlation in one pipeline.",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-lg border border-line p-5">
              <p className="font-mono text-sm font-medium text-cyan">
                {t.name}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* E-E-A-T block */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ink">
                In partnership with the National Centre for Cyber Security
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ink-soft">
                NCCS provides the threat intelligence foundation, regional
                adversary context, and validation framework that makes our MDR
                service operationally credible. Our analysts are trained
                within NCCS programmes and certified against ISO 27001, SOC 2,
                and NIST 800-61.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/5">
                <svg
                  className="h-6 w-6 text-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs text-ink-mute">PARTNER</p>
                <p className="text-sm font-medium text-ink">NCCS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Frequently asked questions
        </h2>
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
              <p className="px-5 pb-4 text-sm leading-6 text-ink-soft">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 border-t border-line pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">
              See what your attack surface looks like
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              A free external scan gives you a baseline before any engagement.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Request a scan
          </a>
        </div>
      </section>
    </div>
  );
}
