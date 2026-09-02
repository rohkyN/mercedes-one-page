import { company, legalLinks } from "../content/site";
export default function sitemap() {
  const base = `https://${company.domain}`;
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1 },
    ...legalLinks.map(([href]) => ({ url: base + href, lastModified: now, priority: 0.3 })),
  ];
}
