import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threat Intelligence Services | Adversary Tracking | Digital Defensive",
  description:
    "Curated threat intelligence, IOC enrichment, and regional adversary tracking powered by NCCS. Sector-specific, actionable, no noise.",
  keywords: [
    "threat intelligence",
    "adversary tracking",
    "IOC enrichment",
    "threat intelligence feeds",
    "APT tracking",
    "regional threat intelligence",
    "threat reporting",
    "strategic threat intelligence",
  ],
  alternates: { canonical: "/services/threat-intelligence" },
};

const feeds = [
  {
    name: "IOC Feeds",
    desc: "Continuously updated indicator sets — hashes, domains, IPs, URLs — enriched with confidence scores, first-seen timestamps, and associated threat actor attribution. Delivered via STIX 2.1, CSV, or API.",
  },
  {
    name: "Adversary Tracking",
    desc: "Active APT and criminal group tracking focused on threats observed targeting organisations in your sector and region. TTP mappings to MITRE ATT&CK, campaign timelines, and infrastructure correlation.",
  },
  {
    name: "Threat Briefings",
    desc: "Monthly strategic threat briefings: what changed, who is active, what it means for your environment. Written for CISOs, not analysts. 10 pages max, zero filler.",
  },
  {
    name: "Campaign Attribution",
    desc: "When a new campaign hits your sector, we attribute it — who is behind it, what infrastructure they use, what their likely next targets are, and how to harden before they arrive.",
  },
  {
    name: "Intelligence-Driven Hunting",
    desc: "Intelligence feeds directly into our MDR and EDR services. New IOCs are tested against your fleet within hours of publication, not days.",
  },
  {
    name: "OSINT & Dark Web Monitoring",
    desc: "Credential leak monitoring, dark web market surveillance, and open-source intelligence collection focused on your organisation and your sector.",
  },
];

const faqs = [
  {
    q: "What makes your threat intelligence different from commercial feeds?",
    a: "Two things: regional specificity and actionability. Most commercial feeds are global and generic. Ours is built on NCCS intelligence — regional adversary patterns, sector-specific targeting, and infrastructure that is actively being used in your threat cluster. And every IOC comes with the context to act on it, not just a hash to block.",
  },
  {
    q: "Do you share threat intelligence with other clients?",
    a: "Anonymised, aggregated threat patterns are shared across our client base through our MDR pipeline. This is how one client's detection protects all clients. Individual client data, incident details, and raw evidence are never shared.",
  },
  {
    q: "What format do intelligence feeds come in?",
    a: "STIX 2.1 (industry standard), CSV, or REST API. We also push IOCs directly into your existing SIEM, EDR, or firewall via integration. No manual import required.",
  },
  {
    q: "Is threat intelligence included in the MDR package?",
    a: "Yes. NCCS-backed threat intelligence is a core component of every MDR engagement — it is what makes our detection and response contextually relevant rather than signature-based.",
  },
];

export default function ThreatIntelPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          // threat intelligence
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
          Threat Intelligence
          <br />
          <span className="text-cyan">that tells you what to do.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Most threat intelligence is noise — thousands of IOCs a day, most of
          them irrelevant to your environment. Ours is different: curated,
          regionally specific, and delivered with the context to act. Powered
          by the National Centre for Cyber Security&apos;s adversary tracking
          and campaign attribution, it feeds directly into our MDR and EDR
          services.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Request a briefing
          </a>
          <a
            href="/services/managed-detection-response"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See MDR →
          </a>
        </div>
      </div>

      {/* Feeds */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          What you get
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {feeds.map((f) => (
            <div key={f.name} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {f.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NCCS block */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ink">
                Powered by the National Centre for Cyber Security
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ink-soft">
                NCCS provides the foundational adversary tracking, regional
                threat context, and campaign attribution that makes our
                intelligence operationally relevant. This is not resold
                commercial feed data — it is institutionally sourced,
                analyst-curated intelligence with a proven track record in
                the regional threat landscape.
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

      {/* Formats */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Delivery formats
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "STIX 2.1",
            "CSV / ICS",
            "REST API",
            "SIEM push (Wazuh, Splunk)",
            "EDR integration",
            "Monthly briefing (PDF)",
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
              See what is targeting your sector right now
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Request a sample briefing — no commitment required.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Request a briefing
          </a>
        </div>
      </section>
    </div>
  );
}
