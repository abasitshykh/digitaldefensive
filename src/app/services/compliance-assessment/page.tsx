import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Audits & Compliance Readiness | ISO 27001 SOC 2 | Digital Defensive",
  description:
    "Security audits, gap analysis, and compliance readiness for ISO 27001, SOC 2, and NIST. Evidence collection, policy review, and audit-ready reporting.",
  keywords: [
    "security audit services",
    "compliance readiness",
    "ISO 27001 consultant",
    "SOC 2 readiness",
    "NIST 800-53 compliance",
    "gap analysis",
    "security policy review",
    "GRC services",
  ],
  alternates: { canonical: "/services/compliance-assessment" },
};

const frameworks = [
  {
    name: "ISO 27001:2022",
    desc: "Full ISMS gap analysis, control mapping, policy drafting, and audit evidence preparation. We prepare you for the certification audit — not just the paperwork.",
  },
  {
    name: "SOC 2 Type I / II",
    desc: "CC control assessment, evidence collection automation, and the technical controls your auditors will test. Reduces audit prep time by weeks.",
  },
  {
    name: "NIST 800-53",
    desc: "Federal and critical-infrastructure compliance: control implementation review, system security plan (SSP) support, and continuous monitoring setup.",
  },
  {
    name: "NIST CSF 2.0",
    desc: "Govern, Identify, Protect, Detect, Respond, Recover — mapped to your current state with a prioritised investment roadmap.",
  },
];

const auditProcess = [
  {
    step: "01",
    title: "Scope & Current-State Assessment",
    desc: "Define the compliance boundary, inventory systems in scope, and assess current control implementation. Delivered as a gap analysis report with risk ratings.",
  },
  {
    step: "02",
    title: "Remediation Roadmap",
    desc: "Prioritised list of controls to implement, policies to draft, and evidence to collect. Effort estimates, owner assignments, and target dates for each item.",
  },
  {
    step: "03",
    title: "Implementation Support",
    desc: "We implement the technical controls: logging, access management, encryption, monitoring. You retain full ownership — we make it audit-ready.",
  },
  {
    step: "04",
    title: "Evidence & Audit Readiness",
    desc: "Full evidence package assembled and cross-referenced to control requirements. Your external auditor gets a clean, complete file — not a scavenger hunt.",
  },
];

const faqs = [
  {
    q: "How long does an ISO 27001 readiness engagement take?",
    a: "Gap analysis: 2–3 weeks. Full readiness (gap analysis + remediation + evidence): 8–16 weeks depending on current maturity. We have taken organisations from zero controls to audit-ready in under 3 months.",
  },
  {
    q: "Do you replace our compliance team?",
    a: "No. We are your technical implementation and evidence layer. Your compliance team owns the process, your auditors own the certification. We make sure the technical side is airtight.",
  },
  {
    q: "Can you prepare us for a SOC 2 Type II audit?",
    a: "Yes. Type II requires 3–12 months of continuous control evidence. We set up the logging, monitoring, and evidence collection infrastructure from day one, so by the time your observation window closes, the evidence is complete.",
  },
  {
    q: "What happens after we're certified?",
    a: "Our MDR service includes continuous monitoring and evidence collection, so your annual recertification audit is a formality — the evidence is already collected and current.",
  },
];

export default function CompliancePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]">
          Security Audits
          <br />
          <span className="text-cyan">&amp; compliance readiness.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Compliance audits fail for one reason: the technical evidence
          doesn&apos;t exist when the auditor asks for it. We fix that. Our
          compliance engagements produce audit-ready evidence packages,
          implemented technical controls, and a remediation roadmap your
          engineering team can actually follow.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Start gap analysis
          </a>
          <a
            href="/services/penetration-testing"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See penetration testing →
          </a>
        </div>
      </div>

      {/* Frameworks */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Frameworks we cover
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {frameworks.map((f) => (
            <div key={f.name} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {f.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          How the engagement works
        </h2>
        <div className="mt-10 space-y-0">
          {auditProcess.map((s) => (
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

      {/* NCCS */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            NCCS advisory support
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            For organisations in regulated sectors, NCCS provides advisory
            support on regulatory interpretation, sector-specific control
            requirements, and the technical expectations that auditors in
            your region apply. This is context that generic compliance
            consulting firms do not have.
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
              Where are you on the compliance journey?
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              A 2-week gap analysis will tell you exactly what&apos;s left.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Start gap analysis
          </a>
        </div>
      </section>
    </div>
  );
}
