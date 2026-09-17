import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NCCS Partnership & Team | Digital Defensive",
  description:
    "Digital Defensive is a cybersecurity consultancy built on the National Centre for Cyber Security. ISO 27001 aligned, SOC 2 ready, NCCS-trained analysts.",
  keywords: [
    "cybersecurity consultancy",
    "NCCS partnership",
    "ISO 27001 aligned",
    "SOC 2 readiness",
    "managed security services",
    "about digital defensive",
  ],
  alternates: { canonical: "/about" },
};

const credentials = [
  {
    title: "ISO 27001 Aligned",
    desc: "ISMS design, control implementation, and audit evidence preparation. We build to the standard, not just to the certification.",
  },
  {
    title: "SOC 2 Type II Ready",
    desc: "Continuous evidence collection, CC control implementation, and audit-ready reporting infrastructure.",
  },
  {
    title: "NIST 800-53 / CSF 2.0",
    desc: "Federal and critical-infrastructure compliance: control mapping, SSP support, and continuous monitoring.",
  },
  {
    title: "OSCP / CEH / CISSP Certified Analysts",
    desc: "Our penetration testing and MDR teams hold industry-recognised offensive and defensive certifications.",
  },
];

const values = [
  {
    title: "Evidence over Adjectives",
    desc: "Every claim we make is backed by a metric, a framework, or a documented process. No 'world-class', no 'next-gen'. Just what we do and how we prove it.",
  },
  {
    title: "Plain Language Reporting",
    desc: "Your CISO, your engineering lead, and your board all need to understand the report. We write for the person who has to act, not the person who signed the invoice.",
  },
  {
    title: "Containment First",
    desc: "Detection without response is a hobby. Every service we deliver ends with the question: 'what happens when it breaks?' Our answer is always: it is contained automatically.",
  },
  {
    title: "Institutional Partnership",
    desc: "We are not a solo consultancy. We are built on the National Centre for Cyber Security — a national institution with a proven track record in the regional threat landscape.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Hero */}
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // about
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Built on the National
          <br />
          <span className="text-cyan">Centre for Cyber Security.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Digital Defensive is a cybersecurity consulting and managed security
          provider founded on the work of the National Centre for Cyber
          Security (NCCS). We take the institutional threat intelligence,
          research capability, and analyst training that NCCS provides and
          turn it into operational, measurable security services for
          businesses of every size.
        </p>
      </div>

      {/* NCCS block */}
      <section className="mt-20">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ink">
                In partnership with the National Centre for Cyber Security
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ink-soft">
                NCCS is a national cybersecurity research and training
                institution. Their threat intelligence, adversary tracking,
                and analyst training programme form the foundation of every
                Digital Defensive service. This is not a marketing
                partnership — it is the operational core of our service.
              </p>
              <a
                href="https://nccs.neduet.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-cyan hover:underline"
              >
                nccs.neduet.edu.pk →
              </a>
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/5">
                <svg
                  className="h-8 w-8 text-cyan"
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
                <p className="text-base font-semibold text-ink">NCCS</p>
                <p className="font-mono text-[10px] text-ink-mute">
                  National Centre for Cyber Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Technical credentials
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {credentials.map((c) => (
            <div key={c.title} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          How we work
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-lg border border-line p-6"
              style={{ background: "var(--card-bg)" }}
            >
              <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "<15 min", label: "Mean time to respond" },
            { value: "24/7", label: "SOC coverage" },
            { value: "5,000+", label: "Endpoints managed" },
            { value: "100%", label: "Incident triage rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-xl p-6"
            >
              <p className="text-3xl font-semibold text-cyan">{s.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 border-t border-line pt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink">
              Work with a team backed by NCCS
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              See what your attack surface looks like — free external scan.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Request a scan
          </a>
        </div>
      </section>
    </div>
  );
}
