import type { Metadata } from "next";

const siteUrl = "https://ziruvaofficial.com";

export const metadata: Metadata = {
  title: "Refund & Returns Policy | ZIRUVA",
  description:
    "ZIRUVA's refund and returns policy for luxury leather handbags. Free UK returns within 14 days. Read our full policy before purchasing.",
  alternates: {
    canonical: `${siteUrl}/refund-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
