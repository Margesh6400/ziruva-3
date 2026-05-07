"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const LAST_UPDATED = "7 May 2025";

const sections = [
  {
    title: "1. Introduction",
    body: `These Terms and Conditions ("Terms") govern your use of the ZIRUVA website located at ziruvaofficial.com (and its associated domains ziruva.co and ziruva.uk) and any purchase you make from us. By accessing our website or placing an order, you agree to be bound by these Terms. Please read them carefully before purchasing.

ZIRUVA is a British luxury goods brand. All transactions are conducted in GBP (British Pounds Sterling) and are subject to English law.`,
  },
  {
    title: "2. Eligibility",
    body: `You must be at least 18 years of age to purchase from ZIRUVA. By placing an order, you confirm that you meet this requirement. We reserve the right to decline orders at our discretion.`,
  },
  {
    title: "3. Products & Availability",
    body: `All ZIRUVA pieces are produced in strictly limited quantities. Hero Series bags are limited to 999 numbered pieces per design. L'Édition pieces are produced in even smaller runs. Once a design is retired, it will not be reproduced.

Product images are as accurate as possible; however, slight variations in colour may occur due to screen calibration. Each piece of full-grain leather is unique in grain and character, and minor natural variations are a hallmark of quality, not a defect.`,
  },
  {
    title: "4. Pricing & Payment",
    body: `All prices are displayed in GBP (£) and include VAT where applicable. We reserve the right to change prices at any time without prior notice. The price charged will be the price confirmed at the time your order is placed.

We accept payment via major credit and debit cards and other methods displayed at checkout. Payment is processed securely. ZIRUVA does not store your full card details.`,
  },
  {
    title: "5. Orders & Contract",
    body: `Placing an order constitutes an offer to purchase. A contract is formed only when we send you an order confirmation email. We reserve the right to refuse or cancel any order, including where a product is mispriced or out of stock, and will issue a full refund in such cases.`,
  },
  {
    title: "6. Delivery",
    body: `We offer complimentary standard delivery within the United Kingdom on all orders. Estimated delivery times are provided at checkout and are indicative only. We are not liable for delays caused by third-party carriers, customs, or circumstances beyond our reasonable control.

International deliveries may be subject to import duties and taxes, which are the responsibility of the recipient. Delivery times may vary.`,
  },
  {
    title: "7. Intellectual Property",
    body: `All content on this website — including but not limited to text, images, product designs, logos, and the ZIRUVA name — is the intellectual property of ZIRUVA and is protected by UK and international copyright law. You may not reproduce, distribute, or use any content without our prior written consent.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the fullest extent permitted by law, ZIRUVA's total liability to you in connection with any purchase shall not exceed the price paid for the product in question. We are not liable for indirect, consequential, or special losses. Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "10. Changes to These Terms",
    body: `We may update these Terms from time to time. The date of the most recent revision appears at the top of this page. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.`,
  },
  {
    title: "11. Contact",
    body: `For any questions regarding these Terms, please contact us at: ziruva.co@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <span style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.5rem",
            letterSpacing: "0.35em",
            color: "var(--accent-brown)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "1.5rem",
          }}>
            Legal — ZIRUVA
          </span>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}>
            Terms &<br />Conditions.
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            color: "var(--text-secondary)",
            marginBottom: "4rem",
            letterSpacing: "0.04em",
          }}>
            Last updated: {LAST_UPDATED}
          </p>

          <div style={{
            height: "1px",
            background: "rgba(43,43,43,0.1)",
            marginBottom: "4rem",
          }} />

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}>
                  {section.title}
                </h2>
                {section.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    color: "var(--text-secondary)",
                    marginBottom: i < section.body.split("\n\n").length - 1 ? "1rem" : 0,
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{
            height: "1px",
            background: "rgba(43,43,43,0.1)",
            margin: "4rem 0",
          }} />

          {/* Footer links */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <Link href="/refund-policy" style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: "var(--accent-brown)",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1px solid var(--accent-brown)",
              paddingBottom: "2px",
            }}>
              Refund &amp; Returns Policy →
            </Link>
            <Link href="/collection" style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1px solid rgba(43,43,43,0.2)",
              paddingBottom: "2px",
            }}>
              Shop the Collection →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
