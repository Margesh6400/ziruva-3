import type { Metadata } from "next";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | ZIRUVA",
  description:
    "Read the Terms and Conditions for ZIRUVA — luxury leather handbags designed in London, UK. Understand your rights and obligations when shopping with us.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
