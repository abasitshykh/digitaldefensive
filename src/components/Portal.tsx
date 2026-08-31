"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogIn,
  ShieldCheck,
  FileText,
  Bell,
  Activity,
  Lock,
  ArrowRight,
  CheckCircle2,
  Users,
  BarChart3,
  AlertTriangle,
  Download,
  Settings,
  LogOut,
  Globe,
  Server,
  Database,
  Key,
} from "lucide-react";
import Logo from "@/components/Logo";
import { plans } from "@/data/plans";

// ===== Types =====
type Metric = { label: string; value: string; trend: string; icon: string };
type ActivityItem = { time: string; text: string; status: "ok" | "warn" | "critical" };
type Finding = { id: number; severity: "critical" | "high" | "medium" | "low"; title: string; asset: string; status: "open" | "remediating" | "resolved" };
type Report = { id: number; name: string; date: string; size: string; type: string };

// ===== Demo Data =====
const metrics: Metric[] = [
  { label: "Assets monitored", value: "42", trend: "2 new this week", icon: "globe" },
  { label: "Open findings", value: "7", trend: "3 critical · 4 high", icon: "alert" },
  { label: "MTTR this month", value: "11 min", trend: "-18% vs last month", icon: "activity" },
  { label: "Threats blocked", value: "1,284", trend: "rolling 30 days", icon: "shield" },
];

const activity: ActivityItem[] = [
  { time: "Today 09:42", text: "Vulnerability scan completed — 2 new findings triaged", status: "ok" },
  { time: "Today 08:15", text: "Malware signature update deployed to all EDR agents", status: "ok" },
  { time: "Yesterday 22:17", text: "Brute-force attempt blocked on VPN endpoint (185.17.x.x)", status: "ok" },
  { time: "Yesterday 14:03", text: "Critical: Log4j variant detected on web-03 — patch applied", status: "critical" },
  { time: "Aug 29", text: "Patch advisory: OpenSSL 3.5.2 — remediation task created", status: "warn" },
  { time: "Aug 27", text: "Monthly penetration test report published", status: "ok" },
  { time: "Aug 25", text: "New asset discovered: 192.168.1.45 (Windows Server 2019)", status: "ok" },
  { time: "Aug 24", text: "TLS certificate renewal scheduled for portal.dd.example.com", status: "ok" },
];

const findings: Finding[] = [
  { id: 1, severity: "critical", title: "Log4j variant (CVE-2023-44487)", asset: "web-03.internal", status: "remediating" },
  { id: 2, severity: "critical", title: "Exposed S3 bucket with customer PII", asset: "storage-eu-1", status: "open" },
  { id: 3, severity: "critical", title: "Weak SSH key on bastion server", asset: "bastion-01", status: "open" },
  { id: 4, severity: "high", title: "Outdated nginx version (1.22.1)", asset: "lb-frontend", status: "remediating" },
  { id: 5, severity: "high", title: "Missing rate limiting on API endpoints", asset: "api-gateway", status: "open" },
  { id: 6, severity: "medium", title: "HTTP to HTTPS redirect not enforced", asset: "web-01", status: "resolved" },
  { id: 7, severity: "low", title: "Verbose error messages in production", asset: "api-internal", status: "resolved" },
];

const reports: Report[] = [
  { id: 1, name: "Q3 Penetration Test Report", date: "Aug 27, 2026", size: "4.2 MB", type: "PDF" },
  { id: 2, name: "Monthly SOC Summary — July", date: "Aug 01, 2026", size: "1.8 MB", type: "PDF" },
  { id: 3, name: "Vulnerability Scan — July", date: "Aug 01, 2026", size: "2.1 MB", type: "CSV" },
  { id: 4, name: "Threat Intelligence Brief — Q2", date: "Jul 15, 2026", size: "3.5 MB", type: "PDF" },
];

// ===== Valid credentials =====
const VALID_EMAIL = "alpha@digitaldefensive.com";
const VALID_PASSWORD = "DD2026!Secure";

export default function Portal() {
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<"overview" | "findings" | "reports" | "settings">("overview");

  useEffect(() => {
    const saved = sessionStorage.getItem("dd_portal_auth");
    if (saved === "true") setAuthed(true);
  }, []);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate auth delay
    setTimeout(() => {
      if (email.toLowerCase().trim() === VALID_EMAIL && password === VALID_PASSWORD) {
        setAuthed(true);
        sessionStorage.setItem("dd_portal_auth", "true");
      } else {
        setError("Invalid credentials. Check your email and password.");
      }
      setLoading(false);
    }, 600);
  }

  function handleLogout() {
    setAuthed(false);
    sessionStorage.removeItem("dd_portal_auth");
    setEmail("");
    setPassword("");
  }

  const severityColors: Record<string, string> = {
    critical: "bg-red-500/10 text-red-400 border-red-500/30",
    high: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    low: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  };

  const statusColors: Record<string, string> = {
    open: "bg-red-500/10 text-red-400",
    remediating: "bg-yellow-500/10 text-yellow-400",
    resolved: "bg-emerald-500/10 text-emerald-400",
  };

  if (!authed) {
    return (
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
        <div className="cyber-grid absolute inset-0" aria-hidden />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card relative mx-4 w-full max-w-md rounded-xl p-8"
        >
          <div className="mb-8 flex flex-col items-center text-center">
            <Logo className="h-14 w-14" />
            <h1 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
              Client Portal
            </h1>
            <p className="mt-2 max-w-xs text-sm leading-6 text-ink-soft">
              Your findings, metrics, and security team — in one place.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="portal-email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft">
                Email
              </label>
              <input
                id="portal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="portal-password" className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft">
                Password
              </label>
              <input
                id="portal-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-mute focus:border-cyan/50"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium uppercase tracking-widest text-obsidian transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] disabled:opacity-50"
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="flex items-center gap-2 font-mono text-[11px] text-ink-mute">
              <Lock className="h-3 w-3" /> SSO available on Aegis &amp; Sovereign
            </span>
            <Link href="#pricing" className="font-mono text-[11px] uppercase tracking-widest text-cyan hover:underline">
              Not a client? See plans
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  const tabs = [
    { id: "overview" as const, label: "Overview", icon: Activity },
    { id: "findings" as const, label: "Findings", icon: AlertTriangle },
    { id: "reports" as const, label: "Reports", icon: FileText },
    { id: "settings" as const, label: "Settings", icon: Settings },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              // client portal
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
              Welcome back, Alpha
            </h1>
            <p className="mt-1 text-sm text-ink-soft">
              Plan: <span className="text-cyan">Aegis</span> · Next assessment due{" "}
              <span className="text-ink">Sep 30, 2026</span>
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-red-400/40 hover:text-red-400"
          >
            <LogOut className="h-3 w-3" /> Sign out
          </button>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 flex gap-1 border-b border-line">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                tab === t.id
                  ? "border-b-2 border-cyan text-cyan"
                  : "text-ink-mute hover:text-ink-soft"
              }`}
            >
              <t.icon className="h-3 w-3" />
              {t.label}
            </button>
          ))}
        </div>

        {/* ===== OVERVIEW TAB ===== */}
        {tab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Metrics */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card glow-border rounded-xl p-5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    {m.label}
                  </p>
                  <p className="mt-2 font-mono text-3xl font-semibold text-ink">
                    {m.value}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-emerald">
                    <CheckCircle2 className="h-3 w-3" /> {m.trend}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Activity feed */}
              <div className="glass-card rounded-xl p-6 lg:col-span-2">
                <h2 className="mb-5 flex items-center gap-2 text-base font-semibold text-ink">
                  <Activity className="h-4 w-4 text-cyan" /> Recent security activity
                </h2>
                <ul className="space-y-4">
                  {activity.map((a) => (
                    <li
                      key={a.text}
                      className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className={`text-sm ${a.status === "critical" ? "text-red-400" : "text-ink-soft"}`}>
                          {a.text}
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-ink-mute">{a.time}</p>
                      </div>
                      <span
                        className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                          a.status === "critical"
                            ? "bg-red-500"
                            : a.status === "warn"
                            ? "bg-yellow-400"
                            : "bg-emerald"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick actions */}
              <div className="glass-card rounded-xl p-6">
                <h2 className="mb-5 text-base font-semibold text-ink">Quick actions</h2>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setTab("reports")}
                      className="flex w-full items-center justify-between rounded-lg border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <span className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-cyan" /> Latest report
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("findings")}
                      className="flex w-full items-center justify-between rounded-lg border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <span className="flex items-center gap-3">
                        <AlertTriangle className="h-4 w-4 text-cyan" /> Open findings
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="flex w-full items-center justify-between rounded-lg border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <span className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-cyan" /> My plan &amp; billing
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => setTab("settings")}
                      className="flex w-full items-center justify-between rounded-lg border border-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-cyan/30 hover:text-cyan"
                    >
                      <span className="flex items-center gap-3">
                        <Bell className="h-4 w-4 text-cyan" /> Alert preferences
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg border border-emerald/20 bg-emerald/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-emerald">
                    24/7 on-call active
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-soft">
                    Aegis &amp; Sovereign plans include direct access to our incident line.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== FINDINGS TAB ===== */}
        {tab === "findings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="glass-card rounded-xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-base font-semibold text-ink">
                  <AlertTriangle className="h-4 w-4 text-cyan" /> Findings
                </h2>
                <div className="flex gap-2">
                  <span className="rounded-full bg-red-500/10 px-3 py-1 font-mono text-[11px] text-red-400">
                    3 Critical
                  </span>
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 font-mono text-[11px] text-orange-400">
                    2 High
                  </span>
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 font-mono text-[11px] text-yellow-400">
                    1 Medium
                  </span>
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 font-mono text-[11px] text-blue-400">
                    1 Low
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {findings.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white/[0.02] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase ${severityColors[f.severity]}`}
                      >
                        {f.severity}
                      </span>
                      <div>
                        <p className="text-sm text-ink-soft">{f.title}</p>
                        <p className="font-mono text-[11px] text-ink-mute">{f.asset}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase ${statusColors[f.status]}`}
                    >
                      {f.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== REPORTS TAB ===== */}
        {tab === "reports" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="glass-card rounded-xl p-6">
              <h2 className="mb-6 flex items-center gap-2 text-base font-semibold text-ink">
                <FileText className="h-4 w-4 text-cyan" /> Reports &amp; Deliverables
              </h2>
              <div className="space-y-3">
                {reports.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-line bg-white/[0.02] px-4 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5">
                        <Download className="h-4 w-4 text-cyan" />
                      </div>
                      <div>
                        <p className="text-sm text-ink-soft">{r.name}</p>
                        <p className="font-mono text-[11px] text-ink-mute">
                          {r.date} · {r.size} · {r.type}
                        </p>
                      </div>
                    </div>
                    <button className="rounded-md border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== SETTINGS TAB ===== */}
        {tab === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="glass-card rounded-xl p-6">
              <h2 className="mb-6 flex items-center gap-2 text-base font-semibold text-ink">
                <Settings className="h-4 w-4 text-cyan" /> Account Settings
              </h2>

              <div className="space-y-6">
                {/* Profile */}
                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-mute">
                    Profile
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft">
                        Name
                      </label>
                      <input
                        defaultValue="Alpha"
                        className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ink-soft">
                        Email
                      </label>
                      <input
                        defaultValue="alpha@digitaldefensive.com"
                        className="w-full rounded-md border border-line bg-white/[0.03] px-4 py-3 text-sm text-ink"
                      />
                    </div>
                  </div>
                </div>

                {/* Alert preferences */}
                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-mute">
                    Alert Preferences
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Critical findings", checked: true },
                      { label: "High severity alerts", checked: true },
                      { label: "Medium severity alerts", checked: true },
                      { label: "Low severity alerts", checked: false },
                      { label: "Weekly summary email", checked: true },
                      { label: "Monthly report ready", checked: true },
                    ].map((pref) => (
                      <label
                        key={pref.label}
                        className="flex cursor-pointer items-center justify-between rounded-lg border border-line bg-white/[0.02] px-4 py-3"
                      >
                        <span className="text-sm text-ink-soft">{pref.label}</span>
                        <input
                          type="checkbox"
                          defaultChecked={pref.checked}
                          className="h-4 w-4 rounded border-line accent-cyan-400"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* API access */}
                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-mute">
                    API Access
                  </h3>
                  <div className="flex items-center justify-between rounded-lg border border-line bg-white/[0.02] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Key className="h-4 w-4 text-cyan" />
                      <div>
                        <p className="text-sm text-ink-soft">API key</p>
                        <p className="font-mono text-[11px] text-ink-mute">
                          dd_live_7f3a...9c2e
                        </p>
                      </div>
                    </div>
                    <button className="rounded-md border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-soft transition-colors hover:border-cyan/40 hover:text-cyan">
                      Regenerate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Plans summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {plans.map((p) => (
            <div key={p.id} className="glass-card rounded-xl p-5 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                {p.name}
              </p>
              <p className="mt-2 font-mono text-2xl font-semibold text-ink">
                ${p.price.toLocaleString()}
                <span className="ml-1 text-xs text-ink-mute">
                  /{p.period === "mo" ? "mo" : "yr"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
