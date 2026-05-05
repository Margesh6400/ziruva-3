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
      id="scroll-manifesto"
      style={{
        minHeight: "45vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 0",
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
          padding: "0 4rem",
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

        {/* Lines with left-to-right clip-path wipe */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.p
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.4 }}
                whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  clipPath: { duration: 0.85, delay: i * 0.14, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.4, delay: i * 0.14 },
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
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            margin: "2.5rem auto 0",
            height: "1px",
            width: "60px",
            background: "var(--accent-brown)",
            transformOrigin: "center",
          }}
        />

        {/* Founder pull-quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1.0 }}
          style={{ marginTop: "3rem" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            &ldquo;We make twelve bags a month. That is not a limitation. That is the point.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.48rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent-brown)",
              marginTop: "1rem",
            }}
          >
            — Founder, Maison ZIRUVA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
