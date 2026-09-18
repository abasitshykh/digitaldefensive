import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penetration Testing Services | VAPT | Digital Defensive",
  description:
    "Network, web app, and cloud penetration testing. Offensive security validation reported in plain language with prioritized fixes. ISO 27001 / SOC 2 aligned.",
  keywords: [
    "penetration testing services",
    "VAPT",
    "web application penetration testing",
    "network penetration testing",
    "cloud security assessment",
    "offensive security validation",
    "vulnerability assessment",
  ],
  alternates: { canonical: "/services/penetration-testing" },
};

const testTypes = [
  {
    name: "External Network",
    desc: "Simulated external attacker against your perimeter: DMZ, edge services, API gateways. Reports every reachable service, version, and exploitable path.",
  },
  {
    name: "Internal Network",
    desc: "Insider-threat modelling: lateral movement, privilege escalation, domain takeover. Identifies the path from a single compromised workstation to domain admin.",
  },
  {
    name: "Web Application",
    desc: "OWASP Top 10 plus business-logic abuse: authentication bypass, IDOR, race conditions, SSRF, and API-specific vulnerabilities.",
  },
  {
    name: "Cloud (AWS / Azure / GCP)",
    desc: "Misconfiguration, identity & access abuse, storage exposure, and privilege escalation across your cloud tenancy. Reports mapped to CIS Benchmarks.",
  },
  {
    name: "Social Engineering",
    desc: "Phishing simulation, credential harvesting, and physical social-engineering assessment. Measures your human layer, not just the technical one.",
  },
  {
    name: "API Security",
    desc: "OWASP API Top 10: broken authentication, BOLA, rate limiting, mass assignment, and excessive data exposure across REST and GraphQL surfaces.",
  },
];

const faqs = [
  {
    q: "How is a penetration test different from a vulnerability scan?",
    a: "A vulnerability scan identifies what is present. A penetration test proves what is exploitable and what the impact is. We don't hand you a list of CVEs — we hand you a risk-ranked path from initial access to business impact.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "External network: 5–10 working days. Web application: 7–15 days depending on scope. Cloud: 5–10 days. Multi-scope engagements are scoped individually. You receive a preliminary findings call within 48 hours of test completion.",
  },
  {
    q: "What does the report look like?",
    a: "Executive summary (board-level), technical findings (full reproduction steps, risk rating per CVSS v4 and business impact), and a prioritised remediation roadmap. No 80-page PDF dumps — only findings that matter, in plain language.",
  },
  {
    q: "Can you test in production?",
    a: "Yes, with written sign-off and agreed safe-harbour windows. We prefer staging where possible but understand that some vulnerabilities only exist in production. We always use non-destructive techniques and abort immediately if service impact is detected.",
  },
  {
    q: "Do you provide retesting?",
    a: "Every engagement includes one free retest within 60 days to validate remediation. This is not a formality — we re-execute the exact attack path to confirm it is closed.",
  },
];

export default function PenTestingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]">
          Penetration Testing
          <br />
          <span className="text-cyan">reported in plain language.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Most penetration testing reports are unreadable. Ours are different:
          every finding is written for the person who has to act on it — the
          CISO, the engineering lead, the board. We test like an attacker,
          report like an engineer, and prioritise like a risk officer.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Scope a test
          </a>
          <a
            href="/services/managed-detection-response"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See MDR →
          </a>
        </div>
      </div>

      {/* Test types */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Test scope
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-soft">
          Choose a single surface or a full-scope engagement. Every test
          includes a free retest within 60 days.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testTypes.map((t) => (
            <div
              key={t.name}
              className="glass-card glow-border rounded-xl p-6"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {t.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Methodology
        </h2>
        <div className="mt-10 space-y-0">
          {[
            {
              step: "01",
              title: "Reconnaissance & Threat Modelling",
              desc: "OSINT, attack surface mapping, and adversary profiling. We identify who would attack you and why, then test that path first.",
            },
            {
              step: "02",
              title: "Exploitation",
              desc: "Live exploitation — not just detection. We prove each finding works, capture evidence, and assess business impact.",
            },
            {
              step: "03",
              title: "Reporting & Remediation Roadmap",
              desc: "Risk-ranked findings, plain-language impact statements, and a prioritised remediation plan your engineering team can act on immediately.",
            },
            {
              step: "04",
              title: "Retest & Close",
              desc: "Free retest within 60 days. We re-execute the exact attack path to confirm closure before we consider the finding resolved.",
            },
          ].map((s, i) => (
            <div
              key={s.step}
              className="flex gap-6 border-b border-line py-8 last:border-0"
              style={{ background: "var(--card-bg)" }}
            >
              <span className="font-mono text-2xl font-semibold text-cyan">
                {s.step}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Standards & frameworks
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "OWASP Top 10 (2025)",
            "CVSS v4.0",
            "PTES",
            "NIST SP 800-115",
            "CIS Security Benchmarks",
            "ISO 27001",
            "SOC 2 Type II",
          ].map((f) => (
            <span
              key={f}
              className="rounded-md border border-line px-4 py-2 font-mono text-xs text-ink-soft"
              style={{ background: "var(--card-bg)" }}
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* NCCS block */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            Adversary context from NCCS
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Our penetration testing engagements are informed by the National
            Centre for Cyber Security&apos;s regional threat intelligence —
            meaning we test the attack patterns most likely to be used against
            organisations in your sector and region, not just the easiest
            vulnerabilities to find.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          FAQ
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
              Ready to see what an attacker sees?
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Scope your engagement in 24 hours. Free retest included.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Scope a test
          </a>
        </div>
      </section>
    </div>
  );
}
