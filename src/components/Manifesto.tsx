"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";

const declarations = [
  {
    id: "01",
    label: "PURPOSE",
    title: "Quiet Luxury",
    text: "True elegance does not shout. It is felt in the weight of a handle and the smoothness of a seam.",
  },
  {
    id: "02",
    label: "VISION",
    title: "Modern Heritage",
    text: "We are defining the history of tomorrow. Our designs are built to be heirlooms, not trends.",
  },
  {
    id: "03",
    label: "SCARCITY",
    title: "Deliberate Limits",
    text: "Each collection is a closed chapter. Once a run is complete, the design is permanently retired.",
  },
  {
    id: "04",
    label: "CRAFT",
    title: "Artisanal Devotion",
    text: "Every stitch is a conscious act. We prioritize the patient hands of masters over the speed of machines.",
  },
  {
    id: "05",
    label: "LEGACY",
    title: "Designed for Decades",
    text: "We build for the long scroll. Objects that age with grace and carry the stories of those who hold them.",
  },
  {
    id: "06",
    label: "ORIGIN",
    title: "Ethical Provenance",
    text: "A deep respect for both hide and hand. Sourced with integrity, crafted with unparalleled care.",
  },
];

/* ─────────────────────────────────────────────
   MOBILE MANIFESTO — vertical stagger list
───────────────────────────────────────────── */
function MobileManifesto() {
  return (
    <section
      id="manifesto"
      style={{
        background: "var(--cream)",
        padding: "3rem 0 4rem",
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: "0 1.5rem", marginBottom: "2.2rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            marginBottom: "0.9rem",
          }}
        >
          <div
            style={{ width: "20px", height: "1px", background: "var(--accent-brown)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.46rem",
              fontWeight: 500,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--text-meta)",
            }}
          >
            The ZIRUVA Principles
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 8vw, 2.8rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          Built on{" "}
          <em style={{ color: "var(--accent-brown)", fontStyle: "italic" }}>
            Conviction.
          </em>
        </h2>
      </motion.div>

      {/* Staggered declaration list */}
      <div style={{ padding: "0 1.5rem" }}>
        {declarations.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.65,
              delay: idx * 0.07,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              borderBottom: "1px solid rgba(43,43,43,0.1)",
              paddingTop: "1.3rem",
              paddingBottom: "1.3rem",
            }}
          >
            {/* Number + label row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.55rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.44rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--accent-brown)",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.44rem",
                  color: "rgba(43,43,43,0.22)",
                  letterSpacing: "0.05em",
                }}
              >
                {item.id}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.45rem",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              {item.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.76rem",
                fontWeight: 300,
                lineHeight: 1.65,
                color: "var(--text-secondary)",
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative closer */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          height: "1px",
          background: "var(--accent-brown)",
          width: "48px",
          margin: "2.2rem auto 0",
          transformOrigin: "center",
          opacity: 0.5,
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP MANIFESTO — original 3-col grid
───────────────────────────────────────────── */
function DesktopManifesto() {
  return (
    <section id="manifesto" style={{ background: "var(--cream)", padding: "1.5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
        {/* Compact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(43,43,43,0.06)",
            border: "1px solid rgba(43,43,43,0.06)",
          }}
        >
          {declarations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              style={{
                background: "var(--cream)",
                padding: "1.8rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: "160px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.45rem",
                      letterSpacing: "0.2em",
                      color: "var(--accent-brown)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.45rem",
                      color: "rgba(43,43,43,0.25)",
                    }}
                  >
                    {item.id}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    marginBottom: "0.6rem",
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "var(--text-secondary)",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */
export default function Manifesto() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileManifesto /> : <DesktopManifesto />;
}
