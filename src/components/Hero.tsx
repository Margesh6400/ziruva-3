"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.4 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        paddingTop: "100px", // Reduced offset for tighter editorial feel
      }}
    >
      {/* Warm radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 65% at 72% 55%, rgba(139,107,78,0.05) 0%, transparent 68%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
          flex: 1, // Fill remaining height
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Editorial Imagery ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
          className="hero-editorial-image"
        >
          <motion.div 
            style={{ 
              scale: 1.1, 
              y: imageY,
              width: "100%",
              height: "100%",
              position: "relative"
            }}
          >
            <Image
              src="/images/hero-geometric.jpg"
              alt="ZIRUVA SS25 Campaign — Handcrafted luxury leather goods"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Micro Badge Overlay */}
          <div style={{
            position: "absolute",
            bottom: "3rem",
            left: "3rem",
            background: "var(--text-primary)",
            color: "var(--cream)",
            padding: "0.6rem 1.2rem",
            fontFamily: "var(--font-fashion)",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            zIndex: 10
          }}>
            CAMPAIGN SS.25
          </div>
        </motion.div>

        {/* ── RIGHT: Branding & Context ── */}
        <div style={{ 
          position: "relative", 
          display: "flex", 
          alignItems: "center", 
          padding: "0 10%",
          zIndex: 2,
          background: "var(--cream)" 
        }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ opacity: textOpacity }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                Maison ZIRUVA — London
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem, 6vw, 6.5rem)",
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--text-primary)",
                marginBottom: "2rem",
              }}
            >
              Timeless
              <br />
              <span style={{ color: "var(--accent-brown)" }}>Luxury,</span>
              <br />
              Crafted
              <br />
              for You.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                maxWidth: "380px",
                marginBottom: "3rem",
                letterSpacing: "0.01em",
              }}
            >
              Exquisite leather handbags, designed in the UK. Each piece
              is a quiet statement of artisan craftsmanship and enduring elegance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "2rem", marginBottom: "5rem" }}
            >
              <a href="#collection" className="btn-primary">
                <span>Shop Collection</span>
              </a>
              <a href="#story" className="btn-secondary">
                The Archive
              </a>
            </motion.div>

            {/* Micro Stats Layer */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "5rem",
                opacity: 0.8
              }}
            >
              {[
                { label: "COLLECTION", val: "SS25 Series" },
                { label: "ARTISANAL", val: "Hand-Stitched" }
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.2em", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 400 }}>{item.val}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .hero-editorial-image { height: 50vh !important; }
        }
        @media (max-width: 860px) {
          .hide-on-mobile { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-grid > div:last-child {
            display: none !important;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          zIndex: 20
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.5rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--accent-brown), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
