"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";

const features = [
  {
    id: 1,
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 3L25 8v12l-11 5L3 20V8l11-5z" />
        <path d="M14 3v22M3 8l11 5 11-5" strokeLinecap="round" />
      </svg>
    ),
    num: "01",
    title: "100% Genuine Leather",
    text: "Only the finest full-grain leathers, sourced responsibly from certified tanneries.",
    detail: "Every hide is selected by hand. We work exclusively with tanneries that meet our strict ethical and environmental standards — no exceptions, no compromises.",
  },
  {
    id: 2,
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 4" strokeLinecap="round" />
      </svg>
    ),
    num: "02",
    title: "True Scarcity",
    text: "Each design is produced in limited quantities. Once retired, never restocked.",
    detail: "We produce between 8 and 30 pieces per design. When a run closes, it closes permanently. This is not a marketing tactic — it is a founding principle.",
  },
  {
    id: 3,
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 14c0-5 4-9 9-9s9 4 9 9" strokeLinecap="round" />
        <path d="M14 14l-4 8M14 14l4 8M10 22h8" strokeLinecap="round" />
      </svg>
    ),
    num: "03",
    title: "Hand Stitched",
    text: "Assembled by master artisans whose hands carry decades of leatherwork expertise.",
    detail: "Each bag takes between 30 and 40 hours to complete. Our artisans use traditional awl-and-needle saddle stitch — stronger than machine stitching and impossible to replicate at scale.",
  },
  {
    id: 4,
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="4" y="8" width="20" height="14" rx="1" />
        <path d="M10 8V6a4 4 0 018 0v2" strokeLinecap="round" />
        <path d="M11 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    num: "04",
    title: "Certified Authenticity",
    text: "Every piece ships with a numbered certificate and a handwritten care note.",
    detail: "Your certificate includes the artisan's name, atelier location, production date, and a unique serial number. It is your ownership record for life.",
  },
];

/* ─────────────────────────────────────────────
   MOBILE
───────────────────────────────────────────── */
function MobileFeatures() {
  return (
    <section id="features" style={{ background: "var(--cream)", padding: "3rem 1.5rem 4rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "2rem" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.7rem" }}>
          <div style={{ width: "18px", height: "1px", background: "var(--accent-brown)" }} />
          <span
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.46rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--text-meta)",
            }}
          >
            The ZIRUVA Promise
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 8vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          Why Choose{" "}
          <em style={{ color: "var(--accent-brown)", fontStyle: "italic" }}>ZIRUVA</em>
        </h2>
      </motion.div>

      <div>
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              borderBottom: "1px solid rgba(43,43,43,0.08)",
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1px solid rgba(43,43,43,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-brown)",
                marginTop: "0.1rem",
              }}
            >
              {f.icon}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--text-primary)",
                  marginBottom: "0.35rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.76rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {f.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP — accordion hover expand
───────────────────────────────────────────── */
function FeatureCard({ f, i }: { f: (typeof features)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={f.id}
      id={`feature-${f.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: i * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0 }}
      style={{
        background: "var(--cream)",
        borderRadius: "1rem",
        padding: "2.5rem 2rem",
        textAlign: "center",
        cursor: "default",
        transition: "box-shadow 0.4s ease",
        boxShadow: hovered ? "0 20px 48px rgba(43,43,43,0.08)" : "none",
      }}
    >
      <motion.div
        animate={{
          background: hovered ? "var(--accent-brown)" : "transparent",
          color: hovered ? "var(--cream)" : "var(--accent-brown)",
        }}
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

      {/* Accordion detail */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(43,43,43,0.08)",
                marginTop: "1rem",
                paddingTop: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--text-meta)",
                  fontStyle: "italic",
                }}
              >
                {f.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DesktopFeatures() {
  return (
    <section id="features" style={{ background: "var(--cream)", padding: "7rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
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

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.id} f={f} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

export default function Features() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileFeatures /> : <DesktopFeatures />;
}
