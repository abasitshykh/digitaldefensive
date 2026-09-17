import type { MetadataRoute } from "next";

const SITE = "https://digitaldefensive.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services/managed-detection-response", priority: 0.9 },
    { path: "/services/penetration-testing", priority: 0.9 },
    { path: "/services/cloud-security", priority: 0.85 },
    { path: "/services/endpoint-detection-response", priority: 0.85 },
    { path: "/services/threat-intelligence", priority: 0.8 },
    { path: "/services/soar-automation", priority: 0.8 },
    { path: "/services/compliance-assessment", priority: 0.85 },
    { path: "/portal", priority: 0.6 },
  ];

  return pages.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));
}
