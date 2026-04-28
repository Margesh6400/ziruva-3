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
      ref={null}
      id="scroll-manifesto"
      style={{
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 0",   /* equal top & bottom */
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,107,78,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 4rem",   /* horizontal only — no extra vertical */
          textAlign: "center",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.55rem",
            fontWeight: 500,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
            display: "block",
            marginBottom: "2rem",
          }}
        >
          The ZIRUVA Manifesto
        </motion.span>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                fontWeight: 300,
                lineHeight: 1.25,
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
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            margin: "2.5rem auto 0",   /* matches the 2rem eyebrow gap above */
            height: "1px",
            width: "60px",
            background: "var(--accent-brown)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
