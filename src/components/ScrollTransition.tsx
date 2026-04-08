"use client";

import { motion } from "framer-motion";

const lines = [
  "Luxury is not loudness.",
  "It is the weight of a clasp.",
  "The warmth of aged leather.",
  "The confidence of saying nothing",
  "— and being understood.",
];

export default function ScrollTransition() {
  return (
    <section
      style={{
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,107,78,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "5rem 4rem",
          textAlign: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
            display: "block",
            marginBottom: "3rem",
          }}
        >
          The ZIRUVA Manifesto
        </motion.span>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 1,
                delay: i * 0.14,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.7rem, 3.5vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.3,
                color: i % 2 === 0 ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.9 }}
          style={{
            margin: "3.5rem auto 0",
            height: "1px",
            width: "70px",
            background: "var(--accent-brown)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
