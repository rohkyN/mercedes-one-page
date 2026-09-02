import { company } from "../content/site";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${company.domain}/sitemap.xml`,
  };
}
