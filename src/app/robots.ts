import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow all major AI crawlers to index ZIRUVA brand content
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
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
