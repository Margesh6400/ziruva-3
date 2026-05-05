import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SecurityLayer from "@/components/SecurityLayer";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ZIRUVA | Luxury Leather Handbags — Designed in London, UK",
    template: "%s | ZIRUVA",
  },

  applicationName: "ZIRUVA",
  appleWebApp: {
    title: "ZIRUVA",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  description:
    "Shop ZIRUVA — luxury leather handbags designed in London and handcrafted by master artisans in Italy. Limited-edition collections in genuine full-grain leather. Free UK delivery. From £310.",

  keywords: [
    "ZIRUVA",
    "luxury leather handbags UK",
    "designer handbags London",
    "luxury handbags UK",
    "leather handbags UK",
    "Maison ZIRUVA",
    "limited edition handbags UK",
    "quiet luxury handbags UK",
    "British luxury fashion brand",
    "genuine leather tote bag UK",
    "handcrafted leather bags",
    "artisan leather handbags",
    "luxury women's handbags UK",
    "croc embossed leather bag UK",
    "La Signature handbag",
    "L'Édition luxury bag",
    "SS25 luxury collection UK",
    "bespoke leather handbags UK",
    "hand stitched leather bag",
    "designer tote bag London UK",
    "luxury accessories UK",
    "full grain leather bag",
    "exclusive handbag collection UK",
    "high end leather goods UK",
    "Italian leather handbags UK",
    "luxury gift for women UK",
    "buy luxury handbag UK",
    "free UK delivery handbags",
    "ziruva.co",
    "ziruva.uk",
    "ziruvaofficial.com",
  ],

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-GB": siteUrl,
      "en": "https://ziruva.co",
      "x-default": siteUrl,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ZIRUVA",
    title: "ZIRUVA | Luxury Leather Handbags — Designed in London, UK",
    description:
      "Discover ZIRUVA — limited-edition leather handbags handcrafted by master artisans and designed in London, UK. Each piece is a collector's object. Free UK delivery.",
    locale: "en_GB",
    images: [
      {
        url: "/images/bag-ivory-teal.png",
        width: 1200,
        height: 630,
        alt: "ZIRUVA La Signature Ivoire — Premium Ivory Leather Handbag designed in London, UK. Luxury British fashion brand. Free UK delivery.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZIRUVA | Luxury Leather Handbags — Designed in London, UK",
    description:
      "Limited-edition leather handbags handcrafted by master artisans. Designed in London, UK. Free UK delivery. Shop the SS25 collection.",
    images: {
      url: "/images/bag-ivory-teal.png",
      alt: "ZIRUVA Luxury Leather Handbag — La Signature Ivoire Collection, Designed in London UK",
    },
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
      alternateName: ["Maison ZIRUVA", "Atelier ZIRUVA"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo/z.png`,
        caption: "ZIRUVA — Luxury Leather Handbags, Designed in London, UK",
      },
      sameAs: [
        "https://ziruva.co",
        "https://ziruva.uk",
        "https://ziruvaofficial.com",
      ],
      description:
        "ZIRUVA is a British luxury leather handbag brand designed in London, UK. Each limited-edition piece is handcrafted by master artisans using genuine full-grain Italian leather. Free UK delivery on all orders.",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "London, United Kingdom",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Continent", name: "Europe" },
      ],
      knowsAbout: [
        "Luxury leather handbags",
        "British luxury fashion",
        "Artisan Italian leather goods",
        "Limited edition handbags",
        "Full-grain leather craftsmanship",
      ],
      priceRange: "£££",
      currenciesAccepted: "GBP",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ZIRUVA SS25 Collection — Luxury Leather Handbags",
        itemListElement: [
          { "@type": "OfferCatalog", name: "La Signature — Timeless Essentials (from £310)" },
          { "@type": "OfferCatalog", name: "Hero Series — Seasonal Icons (from £375, limited to 999)" },
          { "@type": "OfferCatalog", name: "L'Édition — Limited Artist Pieces (from £445)" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ZIRUVA",
      description:
        "Luxury leather handbags designed in London, UK — limited-edition collections handcrafted in Italy. Free UK delivery.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-GB",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".speakable"],
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are ZIRUVA handbags made from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZIRUVA handbags are crafted from Grade A full-grain leather, hand-selected from certified tanneries in Tuscany and Veneto, Italy. Each hide is inspected under natural light for ten quality markers before cutting. The leather develops a unique patina over time, making each bag a living piece.",
          },
        },
        {
          "@type": "Question",
          name: "Where are ZIRUVA bags designed and made?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZIRUVA bags are designed in London, UK, and handcrafted by master artisans in Italy — specifically Florence, Tuscany, and Veneto. Every silhouette is conceived in our London studio and realised through 128 steps of traditional Italian leatherwork. Shop at ziruva.co, ziruva.uk, or ziruvaofficial.com.",
          },
        },
        {
          "@type": "Question",
          name: "Does ZIRUVA offer free delivery in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ZIRUVA offers complimentary delivery across the United Kingdom on all orders. Every piece arrives in signature ZIRUVA packaging with a numbered authenticity certificate and a handwritten care note.",
          },
        },
        {
          "@type": "Question",
          name: "Are ZIRUVA handbags limited edition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every ZIRUVA piece is produced in strictly limited quantities — Hero Series bags are limited to 999 numbered pieces, L'Édition bags are even rarer. Once a design sells out, it is retired permanently, making each handbag a true collector's object.",
          },
        },
        {
          "@type": "Question",
          name: "How much do ZIRUVA handbags cost in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZIRUVA handbags range from £310 to £445 GBP, with free UK delivery included. The price reflects their limited-edition status, Grade A Italian full-grain leather, and 18k gold-plated hardware.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ZIRUVA SS25 collection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ZIRUVA SS25 collection is the Spring/Summer 2025 range featuring the Hero Series (limited to 999 pieces each), La Signature Essentials, and the L'Édition artist pieces — all designed in London, UK and handcrafted in Italy.",
          },
        },
        {
          "@type": "Question",
          name: "Is ZIRUVA a British luxury brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ZIRUVA is a British luxury fashion brand based in London, UK. The brand embodies quiet luxury — restrained, architectural design with exceptional Italian craftsmanship. Shop at ziruva.co, ziruva.uk, or ziruvaofficial.com.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#featured-products`,
      name: "ZIRUVA SS25 — Featured Luxury Leather Handbags UK",
      description: "Limited-edition luxury leather handbags designed in London, UK. Free UK delivery.",
      numberOfItems: 7,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Product",
            name: "La Lune — ZIRUVA L'Édition Luxury Leather Handbag",
            url: `${siteUrl}/product/la-lune`,
            image: `${siteUrl}/images/la-lune-attached.jpg`,
            description:
              "A lunar-inspired luxury leather handbag in cognac calf leather with 18k gold interlocking chain. Handcrafted in Florence, Italy. Limited edition.",
            brand: { "@type": "Brand", name: "ZIRUVA" },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: "445",
              availability: "https://schema.org/LimitedAvailability",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": `${siteUrl}/#organization` },
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: { "@type": "DefinedRegion", addressCountry: "GB" },
                shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "GBP" },
              },
            },
            material: "Smooth Box Calf Leather in Cognac",
            countryOfAssembly: "IT",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Product",
            name: "La Prisme — ZIRUVA Hero Series Luxury Leather Satchel",
            url: `${siteUrl}/product/la-prisme`,
            image: `${siteUrl}/images/la-prisme-new.png`,
            description:
              "A prismatic luxury leather satchel with intarsia multi-coloured leather triangles and 18k gold pillar hardware. Limited to 999 numbered pieces.",
            brand: { "@type": "Brand", name: "ZIRUVA" },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: "425",
              availability: "https://schema.org/LimitedAvailability",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": `${siteUrl}/#organization` },
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: { "@type": "DefinedRegion", addressCountry: "GB" },
                shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "GBP" },
              },
            },
            material: "Grade A Box Calfskin & Leather Intarsia",
            countryOfAssembly: "IT",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Product",
            name: "La Barre — ZIRUVA Hero Series Two-Tone Tote",
            url: `${siteUrl}/product/la-barre`,
            image: `${siteUrl}/images/la-barre-attached.jpg`,
            description:
              "An architectural teal and ivory full-grain leather designer tote with 18k gold-plated pillar handles. Handcrafted in Veneto. Limited to 999 pieces.",
            brand: { "@type": "Brand", name: "ZIRUVA" },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: "375",
              availability: "https://schema.org/LimitedAvailability",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": `${siteUrl}/#organization` },
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingDestination: { "@type": "DefinedRegion", addressCountry: "GB" },
                shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "GBP" },
              },
            },
            material: "Full-Grain Pebbled & Smooth Calf Leather",
            countryOfAssembly: "IT",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Product",
            name: "La Douce — ZIRUVA La Signature Croc-Embossed Tote",
            url: `${siteUrl}/product/la-douce`,
            image: `${siteUrl}/images/la-douce-attached.jpg`,
            description:
              "A cognac croc-embossed Vachetta leather shoulder bag with polished silver logo plaque. Classic luxury craftsmanship from Tuscany, Italy.",
            brand: { "@type": "Brand", name: "ZIRUVA" },
            offers: {
              "@type": "Offer",
              priceCurrency: "GBP",
              price: "355",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": `${siteUrl}/#organization` },
            },
            material: "Cognac Croc-Embossed Vachetta",
            countryOfAssembly: "IT",
          },
        },
      ],
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
        {/* Canonical & hreflang — three domains, UK-primary */}
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" href={siteUrl} hrefLang="en-GB" />
        <link rel="alternate" href="https://ziruva.uk" hrefLang="en-GB" />
        <link rel="alternate" href="https://ziruva.co" hrefLang="en" />
        <link rel="alternate" href={siteUrl} hrefLang="x-default" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SecurityLayer />
        {children}
      </body>
    </html>
  );
}
