"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 3L25 8v12l-11 5L3 20V8l11-5z" />
        <path d="M14 3v22M3 8l11 5 11-5" strokeLinecap="round" />
      </svg>
    ),
    title: "100% Genuine Leather",
    text: "Only the finest full-grain leathers, sourced responsibly from certified tanneries.",
  },
  {
    id: 2,
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 4" strokeLinecap="round" />
      </svg>
    ),
    title: "True Scarcity",
    text: "Each design is produced in limited quantities. Once retired, never restocked.",
  },
  {
    id: 3,
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 14c0-5 4-9 9-9s9 4 9 9" strokeLinecap="round" />
        <path d="M14 14l-4 8M14 14l4 8M10 22h8" strokeLinecap="round" />
      </svg>
    ),
    title: "Hand Stitched",
    text: "Assembled by master artisans whose hands carry decades of leatherwork expertise.",
  },
  {
    id: 4,
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="4" y="8" width="20" height="14" rx="1" />
        <path d="M10 8V6a4 4 0 018 0v2" strokeLinecap="round" />
        <path d="M11 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Certified Authenticity",
    text: "Every piece ships with a numbered certificate and a handwritten care note.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "var(--cream)", padding: "7rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              display: "block",
              marginBottom: "1.2rem",
            }}
          >
            The ZIRUVA Promise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.6rem, 4vw, 3.8rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.05,
            }}
          >
            Why Choose ZIRUVA
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              id={`feature-${f.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              style={{
                background: "var(--cream)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                textAlign: "center",
                cursor: "default",
              }}
            >
              <motion.div
                whileHover={{ background: "var(--accent-brown)", color: "var(--cream)" }}
                transition={{ duration: 0.4 }}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "1px solid rgba(43,43,43,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--accent-brown)",
                  transition: "all 0.4s ease",
                }}
              >
                {f.icon}
              </motion.div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  marginBottom: "0.8rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--text-secondary)",
                }}
              >
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
