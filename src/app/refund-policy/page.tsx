"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const LAST_UPDATED = "7 May 2025";

const sections = [
  {
    title: "1. Our Promise",
    body: `At ZIRUVA, every piece leaves our studio only after passing rigorous quality inspection. We stand fully behind the craftsmanship of our products and want you to be entirely satisfied with your purchase.`,
  },
  {
    title: "2. Returns Eligibility",
    body: `You may return any item within 14 days of delivery for a full refund or exchange, provided the item is:

— Unused and in its original, unworn condition
— Returned in its original ZIRUVA packaging, including the dust bag, box, authenticity certificate, and any included care materials
— Free from scent, marks, or any sign of use

We are unable to accept returns on items that show signs of use, damage caused after delivery, or items returned outside the 14-day window unless the item arrived faulty or not as described.`,
  },
  {
    title: "3. Faulty or Incorrect Items",
    body: `If your item arrives damaged, faulty, or is not what you ordered, please contact us within 48 hours of delivery at ziruva.co@gmail.com with your order number and photographs of the issue. We will arrange a free return and either replace the item or issue a full refund, at your preference.

Under the Consumer Rights Act 2015, you are entitled to a repair, replacement, or refund for goods that are faulty or not as described.`,
  },
  {
    title: "4. How to Return",
    body: `To initiate a return, please email ziruva.co@gmail.com with your order number and reason for return. We will provide you with a prepaid return label and instructions within 2 business days.

Please do not return items without contacting us first, as we cannot guarantee receipt of unregistered returns.`,
  },
  {
    title: "5. Refunds",
    body: `Once your return is received and inspected, we will process your refund within 5–7 business days. Refunds are issued to the original payment method. Please allow up to 10 business days for the funds to appear in your account, depending on your bank.

We do not charge any restocking or handling fees for returns that meet the conditions above.`,
  },
  {
    title: "6. Exchanges",
    body: `We are happy to exchange an item for a different colourway or size where available. As our pieces are limited edition, we cannot guarantee that an alternative will be in stock. Contact us before returning and we will do our best to accommodate your request.`,
  },
  {
    title: "7. International Returns",
    body: `For orders delivered outside the United Kingdom, the customer is responsible for the cost and safe return of goods unless the item is faulty or incorrect. We recommend using a tracked, insured shipping method. ZIRUVA is not liable for items lost or damaged in transit during a return.

Any import duties or taxes paid on the original delivery are non-refundable by ZIRUVA; you may be able to reclaim these through your local customs authority.`,
  },
  {
    title: "8. Cancellations",
    body: `You may cancel your order at no cost before it has been dispatched. If you wish to cancel, please contact us immediately at ziruva.co@gmail.com. Once an order has been dispatched, it cannot be cancelled and must be returned following the process above.

Under the Consumer Contracts Regulations 2013, you have the right to cancel an online order within 14 days of receiving it (the "cooling-off period"), without giving a reason.`,
  },
  {
    title: "9. Non-Returnable Items",
    body: `For hygiene and quality-control reasons, the following cannot be returned unless faulty: items that have been personalised or bespoke-made to order, and items where the original ZIRUVA seal or tags have been removed.`,
  },
  {
    title: "10. Contact",
    body: `If you have any questions about a return or refund, please reach out to us at: ziruva.co@gmail.com

We aim to respond to all enquiries within 1 business day.`,
  },
];

export default function RefundPolicyPage() {
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
            Refund &<br />Returns Policy.
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

          {/* Highlight box */}
          <div style={{
            background: "var(--text-primary)",
            color: "var(--cream)",
            padding: "2rem 2.5rem",
            marginBottom: "4rem",
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.25rem",
              fontWeight: 300,
              lineHeight: 1.7,
            }}>
              Free returns within 14 days of delivery for UK orders. Unused items in original packaging only.
            </p>
          </div>

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
                    whiteSpace: "pre-line",
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
            <Link href="/terms" style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              color: "var(--accent-brown)",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1px solid var(--accent-brown)",
              paddingBottom: "2px",
            }}>
              Terms &amp; Conditions →
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
