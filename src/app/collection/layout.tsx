import type { Metadata } from "next";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  title: "The Archives — Full Collection | ZIRUVA Luxury Leather Handbags UK",
  description:
    "Browse the ZIRUVA SS25 collection — luxury leather handbags designed in London and handcrafted in Italy. Shop La Signature, Hero Series, and L'Édition limited pieces. From £310. Free UK delivery.",
  alternates: {
    canonical: `${siteUrl}/collection`,
    languages: {
      "en-GB": `${siteUrl}/collection`,
      "en": `https://ziruva.co/collection`,
      "x-default": `${siteUrl}/collection`,
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/collection`,
    siteName: "ZIRUVA",
    title: "The Archives — Full Collection | ZIRUVA Luxury Leather Handbags UK",
    description:
      "Shop the full ZIRUVA SS25 collection — limited-edition luxury leather handbags designed in London. La Signature from £310, Hero Series from £375, L'Édition from £445. Free UK delivery.",
    locale: "en_GB",
    images: [
      {
        url: "/images/la-prisme-new.png",
        width: 1200,
        height: 630,
        alt: "ZIRUVA SS25 Collection — Limited-edition luxury leather handbags designed in London, UK. La Prisme Hero Series.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIRUVA Archives — Shop the Full Collection",
    description:
      "Limited-edition luxury leather handbags designed in London. Shop La Signature, Hero Series & L'Édition. Free UK delivery.",
    images: {
      url: "/images/la-prisme-new.png",
      alt: "ZIRUVA SS25 Full Collection — Luxury Leather Handbags UK",
    },
  },
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
