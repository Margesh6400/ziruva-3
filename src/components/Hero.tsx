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
        alignItems: "center",
        /* push content below the fixed header (announcement ~40px + nav ~68px) */
        paddingTop: "108px",
      }}
    >
      {/* Warm radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 65% at 72% 55%, rgba(139,107,78,0.07) 0%, transparent 68%)",
        }}
      />

      {/* Vertical label — far left */}
      <div
        style={{
          position: "absolute",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        className="hide-on-mobile"
      >
        <div style={{ width: "1px", height: "60px", background: "rgba(43,43,43,0.12)" }} />
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Est. 2024 · London
        </span>
        <div style={{ width: "1px", height: "60px", background: "rgba(43,43,43,0.12)" }} />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 4rem 4rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            minHeight: "calc(100vh - 160px)",
          }}
          className="hero-grid"
        >
          {/* ── LEFT: Text ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            style={{ opacity: textOpacity }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                Maison ZIRUVA — SS25 Collection
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.6rem, 7vw, 6.5rem)",
                fontWeight: 300,
                lineHeight: 1.04,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
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

            <motion.div
              variants={fadeUp}
              style={{
                width: "40px",
                height: "1px",
                background: "var(--accent-brown)",
                marginBottom: "2rem",
              }}
            />

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.88rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                maxWidth: "340px",
                marginBottom: "2.5rem",
                letterSpacing: "0.02em",
              }}
            >
              Exquisite leather handbags, designed in the UK. Each piece
              is a quiet statement of enduring elegance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <a href="#collection" id="hero-shop-cta" className="btn-primary">
                <span>Shop Collection</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#story" id="hero-story-cta" className="btn-secondary">
                Our Story
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                gap: "3rem",
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(43,43,43,0.09)",
              }}
            >
              {[
                { value: "40", label: "Pieces Per Drop" },
                { value: "∞", label: "Years of Craft" },
                { value: "UK", label: "Designed Here" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2rem",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      lineHeight: 1.1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Products ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            style={{ position: "relative", y: imageY } as any}
          >
            <motion.div style={{ y: imageY }}>
              {/* Radial glow behind bag */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(139,107,78,0.1) 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />

              {/* Main hero bag — floating */}
              <div
                className="float-animation"
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ position: "relative", width: "380px", height: "380px" }}>
                  <Image
                    src="/images/bag-ivory-teal.png"
                    alt="ZIRUVA La Signature — Ivory & Teal"
                    fill
                    sizes="380px"
                    priority
                    style={{ objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))" }}
                  />
                </div>
              </div>

              {/* Secondary bag — top right, smaller */}
              <div
                className="float-animation-alt"
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-30px",
                  zIndex: 3,
                  animationDelay: "2s",
                }}
              >
                <div style={{ position: "relative", width: "160px", height: "160px" }}>
                  <Image
                    src="/images/bag-brown-croc.png"
                    alt="ZIRUVA L'Édition — Brown Croc"
                    fill
                    sizes="160px"
                    style={{ objectFit: "contain", filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.18))" }}
                  />
                </div>
              </div>

              {/* Product info badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "-20px",
                  background: "var(--white-soft)",
                  border: "1px solid rgba(43,43,43,0.1)",
                  padding: "1.4rem 1.8rem",
                  zIndex: 10,
                  minWidth: "170px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  La Signature
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  The Ivory Edit
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "var(--accent-brown)",
                  }}
                >
                  £ 240
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.58rem",
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
            height: "50px",
            background:
              "linear-gradient(to bottom, var(--accent-brown), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hide-on-mobile { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-grid > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
