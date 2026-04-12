import type { Metadata } from "next";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  title: "The Art of the Process — Atelier | ZIRUVA Luxury Leather Handbags UK",
  description:
    "Discover the 128-step process behind every ZIRUVA handbag — from Grade A Italian leather sourcing to hand-stitching and burnishing. London-designed, Italy-handcrafted luxury leather goods.",
  alternates: {
    canonical: `${siteUrl}/how`,
    languages: {
      "en-GB": `${siteUrl}/how`,
      "en": `https://ziruva.co/how`,
      "x-default": `${siteUrl}/how`,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/how`,
    siteName: "ZIRUVA",
    title: "The Art of the Process — ZIRUVA Atelier",
    description:
      "Every ZIRUVA luxury leather handbag is built through 128 steps of artisan craftsmanship. Discover the process: Italian leather sourcing, precision cutting, hand-stitching, burnishing. Designed in London, UK.",
    locale: "en_GB",
    images: [
      {
        url: "/images/story-editorial.png",
        width: 1200,
        height: 630,
        alt: "ZIRUVA artisan atelier — master craftsman hand-stitching a luxury leather handbag using traditional Italian techniques. Designed in London, UK.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art of the Process | ZIRUVA Atelier",
    description:
      "128 steps. Grade A Italian leather. Traditional hand-stitching. Discover how every ZIRUVA handbag is made.",
    images: {
      url: "/images/story-editorial.png",
      alt: "ZIRUVA atelier — luxury leather handbag craftsmanship process, designed in London UK",
    },
  },
};

export default function HowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
