import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductClient from "./ProductClient";

const siteUrl = "https://ziruvaofficial.com";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return {};

  const title = `${product.name} — ${product.collection} | ZIRUVA Luxury Leather Handbags UK`;
  const description = `${product.narrative} Handcrafted in ${product.specs.origin} from ${product.specs.material}. ${product.price} GBP. Free UK delivery.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/product/${product.id}`,
      languages: {
        "en-GB": `${siteUrl}/product/${product.id}`,
        "en": `https://ziruva.co/product/${product.id}`,
        "x-default": `${siteUrl}/product/${product.id}`,
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/product/${product.id}`,
      siteName: "ZIRUVA",
      title: `${product.name} — ZIRUVA ${product.collection}`,
      description,
      locale: "en_GB",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ZIRUVA`,
      description,
      images: { url: product.image, alt: product.alt },
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return <ProductClient product={product} />;
}
