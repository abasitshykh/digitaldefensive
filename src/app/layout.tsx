import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://digitaldefensive.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Managed Security Services & Penetration Testing | Digital Defensive",
  description:
    "24/7 SOC monitoring, penetration testing, and ISO 27001/SOC 2 compliance. MTTD under 15 minutes. Engagement plans with a client portal. In partnership with NCCS.",
  keywords: [
    "managed security services provider",
    "penetration testing services",
    "managed detection and response",
    "24/7 SOC monitoring",
    "vulnerability assessment",
    "cloud security assessment",
    "risk assessment",
    "ISO 27001 compliance",
    "SOC 2 readiness",
    "zero-trust architecture",
    "threat intelligence",
    "SOAR automation",
    "security posture",
    "risk mitigation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Digital Defensive",
    title: "Managed Security Services & Penetration Testing | Digital Defensive",
    description:
      "24/7 SOC monitoring, penetration testing, and ISO 27001/SOC 2 compliance. MTTD under 15 minutes. In partnership with NCCS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Security Services & Penetration Testing | Digital Defensive",
    description:
      "24/7 SOC monitoring, penetration testing, and ISO 27001/SOC 2 compliance. MTTD under 15 minutes. In partnership with NCCS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05090e",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digital Defensive",
  url: SITE_URL,
  description:
    "Global cybersecurity consulting and managed security provider: 24/7 SOC monitoring, penetration testing, cloud security, EDR, and GRC.",
  partnerOf: {
    "@type": "Organization",
    name: "National Centre for Cyber Security",
    url: "https://nccs.neduet.edu.pk",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Digital Defensive Managed Security Services",
  url: SITE_URL,
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Managed Security Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Managed Detection & Response",
        description: "24/7 SOC monitoring with automated triage and containment. Mean time to respond under 15 minutes.",
      },
      {
        "@type": "Offer",
        name: "Penetration Testing",
        description: "Offensive validation of networks, web applications, and cloud, reported in plain language with prioritized fixes.",
      },
      {
        "@type": "Offer",
        name: "Security Audits & Compliance Readiness",
        description: "Gap analysis, policy review, and compliance readiness mapped to ISO 27001, SOC 2, and NIST.",
      },
      {
        "@type": "Offer",
        name: "Endpoint Detection & Response",
        description: "Velociraptor-based EDR fleet with remote forensics, timeline reconstruction, and threat hunting.",
      },
      {
        "@type": "Offer",
        name: "Threat Intelligence",
        description: "Curated intel feeds, IOC enrichment, and regional adversary tracking.",
      },
      {
        "@type": "Offer",
        name: "SOAR Playbooks",
        description: "Shuffle-powered automation that turns alert noise into contained incidents and auditable evidence.",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </body>
    </html>
  );
}
