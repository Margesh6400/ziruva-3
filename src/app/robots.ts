import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      "https://ziruvaofficial.com/sitemap.xml",
      "https://ziruva.co/sitemap.xml",
      "https://ziruva.uk/sitemap.xml",
    ],
    host: "https://ziruvaofficial.com",
  };
}
