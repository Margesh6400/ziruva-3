"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [0, -20]);

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
        paddingTop: "90px",
      }}
    >
      {/* Warm radial atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(139,107,78,0.06) 0%, transparent 65%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.18fr 1fr",
          width: "100%",
          flex: 1,
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Editorial Image ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
          className="hero-editorial-image"
        >
          <motion.div
            style={{
              scale: 1.08,
              y: imageY,
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              src="/images/hero-geometric.jpg"
              alt="ZIRUVA SS25 Campaign — Luxury leather handbags designed in London, UK. Handcrafted by master artisans in Italy using Grade A full-grain leather"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Subtle bottom gradient for badge legibility */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(26,24,3,0.35) 0%, transparent 40%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Campaign Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "2.5rem",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "rgba(252,248,240,0.5)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.52rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(252,248,240,0.75)",
              }}
            >
              Campaign SS.25
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Branding & Copy ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            padding: "0 9% 0 8%",
            zIndex: 2,
            background: "var(--cream)",
          }}
        >
          {/* Vertical separator */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "absolute",
              left: 0,
              top: "15%",
              bottom: "15%",
              width: "1px",
              background: "var(--border-light)",
              transformOrigin: "top",
            }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ opacity: textOpacity, y: textY, width: "100%" }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "var(--accent-brown)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.58rem",
                  fontWeight: 500,
                  letterSpacing: "0.42em",
                  textTransform: "uppercase",
                  color: "var(--text-meta)",
                }}
              >
                Maison ZIRUVA — London
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.2rem, 5.5vw, 6rem)",
                fontWeight: 300,
                lineHeight: 1.02,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "2.2rem",
              }}
            >
              Timeless
              <br />
              <em
                style={{
                  color: "var(--accent-brown)",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                Luxury,
              </em>
              <br />
              Crafted
              <br />
              for You.
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--text-secondary)",
                maxWidth: "340px",
                marginBottom: "3rem",
                letterSpacing: "0.012em",
              }}
            >
              Exquisite leather handbags, designed in the UK. Each piece is a
              quiet statement of artisan craftsmanship and enduring elegance.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "1.5rem", marginBottom: "4.5rem" }}
            >
              <a href="#collection" className="btn-primary">
                <span>Shop Collection</span>
              </a>
              <a href="#story" className="btn-secondary">
                The Archive
              </a>
            </motion.div>

            {/* Micro Stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "0",
              }}
            >
              {[
                { label: "Collection", val: "SS25 Series" },
                { label: "Artisanal", val: "Hand-Stitched" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    paddingRight: i === 0 ? "3rem" : 0,
                    paddingLeft: i === 1 ? "3rem" : 0,
                    borderLeft: i === 1 ? "1px solid var(--border-light)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.48rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--text-meta)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.val}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-editorial-image { height: 55vh !important; }
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
        transition={{ delay: 2.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.2rem",
          right: "3.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.7rem",
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.45rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "44px",
            background:
              "linear-gradient(to bottom, var(--accent-brown), transparent)",
            animation: "scrollPulse 2.2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.15); }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
