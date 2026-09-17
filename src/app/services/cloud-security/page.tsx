import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Security Assessment | AWS Azure GCP | Digital Defensive",
  description:
    "Cloud security audits for AWS, Azure, and GCP. Misconfiguration, identity abuse, storage exposure — mapped to CIS Benchmarks and ISO 27001.",
  keywords: [
    "cloud security assessment",
    "cloud security audit",
    "AWS security",
    "Azure security assessment",
    "GCP security audit",
    "CIS benchmarks",
    "cloud misconfiguration",
    "cloud identity security",
  ],
  alternates: { canonical: "/services/cloud-security" },
};

const auditAreas = [
  {
    name: "Identity & Access",
    desc: "Over-privileged roles, legacy service accounts, MFA gaps, federation misconfigurations, and cross-account privilege escalation paths.",
  },
  {
    name: "Storage & Data",
    desc: "Publicly exposed buckets, missing encryption at rest, bucket policy abuse, data lifecycle gaps, and cross-region data residency violations.",
  },
  {
    name: "Network Architecture",
    desc: "VPC peering gaps, security group over-permissiveness, transitive routing exposure, DNS hijacking, and egress control failures.",
  },
  {
    name: "Compute & Workloads",
    desc: "Unpatched AMIs, container image vulnerabilities, runtime privilege escalation, and workload-to-workload lateral movement paths.",
  },
  {
    name: "Logging & Monitoring",
    desc: "CloudTrail / Audit Log gaps, log retention misconfigurations, SIEM blind spots, and the ability for an attacker to disable their own audit trail.",
  },
  {
    name: "Compliance Mapping",
    desc: "Findings mapped directly to CIS AWS / Azure / GCP Benchmarks, ISO 27001 controls, SOC 2 CC6, and NIST 800-53 where applicable.",
  },
];

const faqs = [
  {
    q: "Do you test in our production cloud accounts?",
    a: "We work in read-only mode against production where needed, and in full-access mode against staging. All access is scoped to the least-privileged role required for the assessment — no destructive actions, no data modification.",
  },
  {
    q: "What does the cloud security report include?",
    a: "Executive summary, full technical findings with reproduction steps, risk ratings (CVSS v4 + business impact), CIS Benchmark control references, and a prioritised remediation roadmap with owner and effort estimates.",
  },
  {
    q: "How long does a cloud assessment take?",
    a: "Single-cloud, single-account: 3–5 working days. Multi-account or multi-cloud: 5–10 working days. You receive a preliminary findings call within 48 hours of completion.",
  },
  {
    q: "Can this satisfy a compliance requirement?",
    a: "Our assessments are designed to produce evidence that maps directly to ISO 27001, SOC 2, and CIS Benchmark requirements. Many clients use our reports as the technical evidence layer for their compliance audit.",
  },
];

export default function CloudSecurityPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // cloud security
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Cloud Security
          <br />
          <span className="text-cyan">mapped to the benchmarks that matter.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Cloud breaches are rarely breaches of the cloud provider. They are
          breaches of your configuration: an over-privileged role, an exposed
          bucket, a misconfigured security group. We find them before your
          attacker does — and report them in a format your auditors will
          accept.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Scope an audit
          </a>
          <a
            href="/services/penetration-testing"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See penetration testing →
          </a>
        </div>
      </div>

      {/* Audit areas */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          What we assess
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {auditAreas.map((a) => (
            <div key={a.name} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {a.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frameworks */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Compliance frameworks covered
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "CIS AWS Benchmarks v1.5",
            "CIS Azure Benchmarks v2.0",
            "CIS GCP Benchmarks v2.0",
            "ISO 27001:2022",
            "SOC 2 Type II",
            "NIST 800-53",
            "GDPR (data residency)",
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

      {/* NCCS */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            Adversary context from NCCS
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Cloud-targeted attacks in your region follow specific patterns —
            credential stuffing against SSO, supply-chain compromise of public
            packages, and exploitation of known misconfigurations. Our
            assessments are informed by NCCS threat intelligence to test the
            attack paths most likely to be used against you.
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
              Find your cloud attack surface
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Scoped in 24 hours. CIS Benchmark-mapped report. Free retest.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Scope an audit
          </a>
        </div>
      </section>
    </div>
  );
}
