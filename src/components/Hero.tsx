"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useMediaQuery";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─────────────────────────────────────────────
   MOBILE HERO
───────────────────────────────────────────── */
function MobileHero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        marginTop: "56px",                    /* push below fixed navbar */
        height: "calc(100svh - 56px)",        /* fill remaining viewport */
        minHeight: "520px",
        overflow: "hidden",
        background: "var(--cream)",
      }}
    >
      {/* Full-bleed image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.58 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          src="/images/hero-geometric.jpg"
          alt="ZIRUVA SS25 Campaign — Luxury leather handbags"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
        />
      </motion.div>

      {/* Scrim — dark at bottom for text, light at top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(14,10,4,0.08) 0%, transparent 22%, rgba(14,10,4,0.5) 52%, rgba(14,10,4,0.93) 78%, rgba(14,10,4,0.98) 100%)",
          zIndex: 2,
        }}
      />

      {/* Campaign badge — just below navbar */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{
          position: "absolute",
          top: "1.2rem",
          left: "1.5rem",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
        }}
      >
        <div style={{ width: "18px", height: "1px", background: "rgba(252,248,240,0.4)" }} />
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.46rem",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(252,248,240,0.6)",
          }}
        >
          Campaign SS.25
        </span>
      </motion.div>

      {/* Bottom content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: "0 1.6rem calc(1.8rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.75rem" }}
        >
          <div style={{ width: "18px", height: "1px", background: "var(--accent-brown)", opacity: 0.8 }} />
          <span
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.48rem",
              fontWeight: 500,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "rgba(252,248,240,0.82)",
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
            fontSize: "clamp(2.6rem, 10.5vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.06,
            color: "var(--cream)",
            letterSpacing: "-0.01em",
            marginBottom: "0.85rem",
          }}
        >
          Timeless{" "}
          <em
            style={{
              color: "#f0d49a",
              fontStyle: "italic",
              fontWeight: 300,
              textShadow: "0 2px 14px rgba(0,0,0,0.6)",
            }}
          >
            Luxury,
          </em>
          <br />
          Crafted for You.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(252,248,240,0.88)",
            marginBottom: "1.25rem",
            letterSpacing: "0.01em",
            maxWidth: "300px",
          }}
        >
          Exquisite leather handbags, designed in the UK and crafted by master artisans in Italy.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          <a
            href="#collection"
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.56rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--cream)",
              background: "var(--accent-brown)",
              padding: "0.75rem 1.6rem",
              display: "inline-block",
              transition: "background 0.3s ease",
            }}
            onTouchStart={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#a07848")}
            onTouchEnd={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-brown)")}
          >
            Shop Collection
          </a>
          <a
            href="#story"
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.56rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "rgba(252,248,240,0.88)",
              border: "1px solid rgba(252,248,240,0.28)",
              padding: "0.75rem 1.4rem",
              display: "inline-block",
            }}
          >
            Our Story
          </a>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            gap: "0",
            marginTop: "1.2rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(252,248,240,0.18)",
          }}
        >
          {[
            { label: "Collection", val: "SS25 Series" },
            { label: "Artisanal", val: "Hand-Stitched" },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                paddingRight: i === 0 ? "2rem" : 0,
                paddingLeft: i === 1 ? "2rem" : 0,
                borderLeft: i === 1 ? "1px solid rgba(252,248,240,0.18)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.42rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(252,248,240,0.72)",
                  marginBottom: "0.28rem",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.76rem",
                  fontWeight: 400,
                  color: "rgba(252,248,240,0.95)",
                }}
              >
                {item.val}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "calc(1.8rem + env(safe-area-inset-bottom, 0px))",
          right: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.4rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(252,248,240,0.38)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "34px",
            background: "linear-gradient(to bottom, rgba(201,169,122,0.75), transparent)",
            animation: "scrollPulse 2.2s ease-in-out infinite",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP HERO
───────────────────────────────────────────── */
function DesktopHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -18]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        height: "100vh",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        /* announcement bar (~35px) + navbar (66px) = ~100px clearance */
        paddingTop: "100px",
      }}
    >
      {/* Warm radial atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 70% at 72% 50%, rgba(139,107,78,0.07) 0%, transparent 65%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          width: "100%",
          flex: 1,
        }}
      >
        {/* ── LEFT: Editorial Image ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
        >
          <motion.div
            style={{
              scale: 1.07,
              y: imageY,
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              src="/images/hero-geometric.jpg"
              alt="ZIRUVA SS25 Campaign — Luxury leather handbags designed in London, UK"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(26,24,3,0.32) 0%, transparent 38%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Campaign Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
            }}
          >
            <div style={{ width: "26px", height: "1px", background: "rgba(252,248,240,0.5)" }} />
            <span
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.5rem",
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
            padding: "0 8% 0 7%",
            zIndex: 2,
            background: "var(--cream)",
          }}
        >
          {/* Vertical separator */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "absolute",
              left: 0,
              top: "12%",
              bottom: "12%",
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
              style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.6rem" }}
            >
              <div style={{ width: "22px", height: "1px", background: "var(--accent-brown)" }} />
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.56rem",
                  fontWeight: 500,
                  letterSpacing: "0.42em",
                  textTransform: "uppercase",
                  color: "var(--text-meta)",
                }}
              >
                Maison ZIRUVA — London
              </span>
            </motion.div>

            {/* Headline — tighter, 3-line layout */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 5.2vw, 5.6rem)",
                fontWeight: 300,
                lineHeight: 1.04,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                marginBottom: "1.6rem",
              }}
            >
              Timeless{" "}
              <em style={{ color: "var(--accent-brown)", fontStyle: "italic", fontWeight: 300 }}>
                Luxury,
              </em>
              <br />
              Crafted for You.
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                maxWidth: "320px",
                marginBottom: "2.2rem",
                letterSpacing: "0.012em",
              }}
            >
              Exquisite leather handbags, designed in the UK. Each piece is a quiet statement of
              artisan craftsmanship and enduring elegance.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: "1.2rem", marginBottom: "3rem" }}
            >
              <a href="#collection" className="btn-primary">
                <span>Shop Collection</span>
              </a>
              <a href="#story" className="btn-secondary">
                The Archive
              </a>
            </motion.div>

            {/* Micro Stats */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "0" }}>
              {[
                { label: "Collection", val: "SS25 Series" },
                { label: "Artisanal", val: "Hand-Stitched" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    paddingRight: i === 0 ? "2.5rem" : 0,
                    paddingLeft: i === 1 ? "2.5rem" : 0,
                    borderLeft: i === 1 ? "1px solid var(--border-light)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.46rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--text-meta)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.83rem",
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          zIndex: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.44rem",
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
            height: "42px",
            background: "linear-gradient(to bottom, var(--accent-brown), transparent)",
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

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */
export default function Hero() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHero /> : <DesktopHero />;
}
