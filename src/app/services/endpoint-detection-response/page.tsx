import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endpoint Detection & Response (EDR) | Digital Defensive",
  description:
    "Velociraptor-based EDR fleet: remote forensics, timeline reconstruction, threat hunting, and automated containment. Sub-15-minute response.",
  keywords: [
    "endpoint detection and response",
    "EDR services",
    "Velociraptor",
    "endpoint forensics",
    "threat hunting",
    "malware detection",
    "lateral movement detection",
    "endpoint security",
  ],
  alternates: { canonical: "/services/endpoint-detection-response" },
};

const features = [
  {
    name: "Fleet Visibility",
    desc: "Real-time inventory of every endpoint: OS, patch level, running services, installed software, and user context. No blind spots in your estate.",
  },
  {
    name: "Threat Detection",
    desc: "Behavioural detection across process, file, registry, and network layers. Catches fileless malware, living-off-the-land attacks, and in-memory exploits that signature-based AV misses.",
  },
  {
    name: "Remote Forensics",
    desc: "Velociraptor collects full forensic artefacts — memory, disk, registry, timeline — from a compromised endpoint in minutes, without an on-site visit.",
  },
  {
    name: "Timeline Reconstruction",
    desc: "Reconstruct the full attack sequence: initial access, lateral movement, persistence, data exfiltration. Every step, every timestamp, every artefact.",
  },
  {
    name: "Automated Containment",
    desc: "Network isolation, process kill, credential revocation — triggered by SOAR playbooks in under 90 seconds, with full audit trail for post-incident review.",
  },
  {
    name: "Threat Hunting",
    desc: "Hypothesis-driven hunts targeting the specific adversary TTPs observed in your threat cluster. Not generic YARA rule sweeps — targeted, contextual, and reportable.",
  },
];

const faqs = [
  {
    q: "Why Velociraptor over commercial EDR?",
    a: "Velociraptor is open-source, auditable, and built specifically for remote forensics — the exact use case most commercial EDR products handle poorly. It has no telemetry phoning home to a vendor, no per-seat licence cost, and full control stays with your organisation. Our analysts operate it at enterprise scale.",
  },
  {
    q: "Can we keep our existing EDR and add your service?",
    a: "Yes. We can operate alongside CrowdStrike, SentinelOne, or any commercial EDR as a second opinion layer and forensic collection engine. In practice, our MDR service often replaces the need for a separate commercial EDR for mid-market organisations.",
  },
  {
    q: "How many endpoints can you manage?",
    a: "Our current fleet capacity is 5,000+ endpoints. Below that threshold, the service is included in your engagement plan. Above that, we scope individually.",
  },
  {
    q: "What does the deployment look like?",
    a: "Velociraptor client deployment via your existing MDM (Intune, SCCM, Jamf, or Ansible). No agent reboots, no service disruption. Full fleet visibility within 24 hours of deployment.",
  },
];

export default function EDRPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]">
          Endpoint Detection
          <br />
          <span className="text-cyan">&amp; Response, done right.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink-soft">
          Endpoint breaches are where 80% of enterprise incidents begin. Our
          EDR service is built on Velociraptor — the same open-source forensic
          platform used by national CERT teams — giving you military-grade
          endpoint visibility without the commercial EDR black box.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Deploy EDR
          </a>
          <a
            href="/services/managed-detection-response"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-sm uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            See MDR →
          </a>
        </div>
      </div>

      {/* Features */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          What you get
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.name} className="glass-card glow-border rounded-xl p-6">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan">
                {f.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Velociraptor */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            Why Velociraptor?
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Open Source
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Fully auditable codebase. No vendor lock-in, no hidden
                telemetry, no per-seat licence cost.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Forensic-Grade
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Built for remote forensics. Collects memory, disk, registry,
                and timeline artefacts in minutes — not hours.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Fleet-Scale
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Designed for 100s to 10,000s of endpoints. Centralised
                querying, batch collection, and automated triage at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NCCS */}
      <section className="mt-24">
        <div className="glass-card rounded-xl border border-cyan/20 p-8">
          <h2 className="text-xl font-semibold text-ink">
            NCCS-backed threat context
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
            Our EDR detections are enriched with NCCS threat intelligence —
            regional adversary TTPs, active campaign IOCs, and sector-specific
            targeting patterns. This means your endpoints are protected against
            the threats most likely to be used against organisations in your
            region, not just the most common threats globally.
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
              Deploy endpoint visibility in 24 hours
            </h2>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Full fleet visibility within one day. No agent reboots.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Deploy EDR
          </a>
        </div>
      </section>
    </div>
  );
}
