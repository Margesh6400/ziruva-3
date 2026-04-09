import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ZIRUVA | Luxury Leather Handbags — Designed in London",
    template: "%s | ZIRUVA",
  },

  description:
    "Shop ZIRUVA — luxury leather handbags handcrafted by master artisans, designed in London. Limited-edition collections in genuine full-grain leather. Free UK delivery.",

  keywords: [
    "ZIRUVA",
    "luxury leather handbags",
    "designer handbags UK",
    "luxury handbags London",
    "leather handbags UK",
    "Maison ZIRUVA",
    "limited edition handbags",
    "quiet luxury handbags",
    "British luxury fashion",
    "genuine leather tote bag",
    "handcrafted leather bags",
    "artisan leather handbags",
    "luxury women's handbags",
    "crocodile leather bag UK",
    "La Signature handbag",
    "L'Édition luxury bag",
    "SS25 luxury collection",
    "bespoke leather handbags",
    "hand stitched leather bag",
    "designer tote bag London",
    "luxury accessories UK",
    "full grain leather bag",
    "exclusive handbag collection",
    "high end leather goods UK",
    "ziruva.co",
    "ziruva.uk",
    "ziruvaofficial.com",
  ],

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-GB": siteUrl,
      "en-US": "https://ziruva.co",
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ZIRUVA",
    title: "ZIRUVA | Luxury Leather Handbags — Designed in London",
    description:
      "Discover ZIRUVA — limited-edition leather handbags handcrafted by master artisans and designed in London. Each piece is a collector's object.",
    locale: "en_GB",
    images: [
      {
        url: "/images/bag-ivory-teal.png",
        width: 1200,
        height: 630,
        alt: "ZIRUVA La Signature Ivoire — Luxury Ivory Leather Handbag with Teal Handles, designed in London",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZIRUVA | Luxury Leather Handbags — Designed in London",
    description:
      "Limited-edition leather handbags handcrafted by master artisans. Designed in London. Shop the SS25 collection.",
    images: ["/images/bag-ivory-teal.png"],
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

  category: "fashion",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ZIRUVA",
      alternateName: "Maison ZIRUVA",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo/z.png`,
      },
      sameAs: [
        "https://ziruva.co",
        "https://ziruva.uk",
        "https://ziruvaofficial.com",
      ],
      description:
        "ZIRUVA is a British luxury leather handbag brand designed in London. Each limited-edition piece is handcrafted by master artisans using genuine full-grain leather.",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "London, United Kingdom",
      },
      areaServed: ["GB", "US", "EU"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ZIRUVA",
      description: "Luxury leather handbags designed in London",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" href="https://ziruva.co" hrefLang="en" />
        <link rel="alternate" href="https://ziruva.uk" hrefLang="en-GB" />
        <link rel="alternate" href="https://ziruvaofficial.com" hrefLang="en-GB" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
