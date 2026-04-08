import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZIRUVA | Luxury Leather Handbags — Crafted in the UK",
  description:
    "Discover ZIRUVA — exquisite leather handbags designed with timeless craftsmanship and modern elegance. Luxury redefined for the intentional woman.",
  keywords: ["luxury handbags", "leather bags", "UK luxury", "ZIRUVA", "designer handbags"],
  openGraph: {
    title: "ZIRUVA | Luxury Leather Handbags",
    description: "Exquisite leather handbags designed in the UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
