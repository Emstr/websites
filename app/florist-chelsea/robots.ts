import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://chelseablooms.co.uk";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/private/", "/_next/"] }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
