"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useMediaQuery";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= to) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   MOBILE
───────────────────────────────────────────── */
function MobileStory() {
  return (
    <section
      id="story"
      style={{
        background: "var(--cream)",
        padding: "3rem 0 4rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          padding: "0 1.5rem",
          marginBottom: "1.8rem",
        }}
      >
        <div style={{ width: "20px", height: "1px", background: "var(--accent-brown)" }} />
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.48rem",
            fontWeight: 500,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "var(--text-meta)",
          }}
        >
          Our Story — Atelier Dossier
        </span>
      </motion.div>

      {/* Full-bleed image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/5",
          overflow: "hidden",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/images/story-editorial.png"
          alt="ZIRUVA master artisan hand-stitching a luxury leather handbag"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)" }}
        />
        <div
          style={{
            position: "absolute",
            top: "1.2rem",
            left: "1.5rem",
            background: "var(--text-primary)",
            color: "var(--cream)",
            fontFamily: "var(--font-fashion)",
            fontSize: "0.44rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "0.4rem 0.8rem",
          }}
        >
          Atelier Dossier — Vol. IV
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,20,12,0.35) 0%, transparent 45%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "1.2rem", left: "1.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.44rem",
              color: "rgba(252,248,240,0.55)",
              marginBottom: "0.2rem",
            }}
          >
            SERIAL NO.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "rgba(252,248,240,0.9)",
            }}
          >
            ZR-2024-LDN
          </p>
        </div>
      </motion.div>

      <div style={{ padding: "0 1.5rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 9vw, 3rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          Precision <br />
          <span style={{ color: "var(--accent-brown)", fontStyle: "italic" }}>Craftsmanship</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            marginBottom: "1.4rem",
          }}
        >
          A study in restraint. Each ZIRUVA silhouette is built from the inside out, ensuring
          structural integrity that lasts generations.
        </motion.p>

        {/* Pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderLeft: "2px solid var(--accent-brown)",
            paddingLeft: "1.1rem",
            margin: "0 0 1.6rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            fontStyle: "italic",
            fontWeight: 300,
            lineHeight: 1.55,
            color: "var(--text-primary)",
          }}
        >
          &ldquo;We make twelve bags a month. That is not a limitation. That is the point.&rdquo;
          <footer
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.42rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-brown)",
              marginTop: "0.5rem",
              fontStyle: "normal",
            }}
          >
            — Founder, Maison ZIRUVA
          </footer>
        </motion.blockquote>

        {/* Materials list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderTop: "1px solid rgba(43,43,43,0.1)",
            paddingTop: "1.3rem",
            marginBottom: "1.8rem",
          }}
        >
          {[
            { label: "Material", val: "Grade A Full-Grain" },
            { label: "Hardware", val: "Bespoke Solid Brass" },
            { label: "Thread", val: "Waxed Linen Cord" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(43,43,43,0.06)",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.46rem",
                  color: "var(--text-meta)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {item.val}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Count-up stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(43,43,43,0.1)",
            border: "1px solid rgba(43,43,43,0.1)",
            marginBottom: "1.5rem",
          }}
        >
          {[
            { val: 12, suffix: "", label: "bags / month" },
            { val: 36, suffix: "h", label: "per bag" },
            { val: 3, suffix: "", label: "artisans / piece" },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--cream)", padding: "1rem 0.9rem", textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "var(--accent-brown)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                <CountUp to={s.val} suffix={s.suffix} />
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.42rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-meta)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Artisan signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "flex-end", opacity: 0.45 }}
        >
          <div
            style={{
              textAlign: "right",
              borderTop: "1px solid var(--text-primary)",
              paddingTop: "0.4rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.8rem",
                fontStyle: "italic",
                marginBottom: "0.1rem",
              }}
            >
              M. artisan
            </p>
            <p
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.38rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Approved for Archive
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP
───────────────────────────────────────────── */
function DesktopStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.02]);

  return (
    <section
      ref={sectionRef}
      id="story"
      style={{
        background: "var(--cream)",
        padding: "4rem 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "3rem",
            alignItems: "stretch",
            background: "var(--cream)",
            padding: "2.5rem",
            borderRadius: "0.2rem",
            border: "1px solid rgba(43,43,43,0.1)",
            position: "relative",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              padding: "0.5rem 1rem",
              background: "var(--text-primary)",
              color: "var(--cream)",
              fontFamily: "var(--font-fashion)",
              fontSize: "0.45rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              zIndex: 10,
            }}
          >
            Atelier Dossier — Vol. IV
          </div>

          {/* Left: Image */}
          <div
            style={{
              position: "relative",
              borderRight: "1px solid rgba(43,43,43,0.08)",
              paddingRight: "3rem",
            }}
          >
            <motion.div style={{ scale: imageScale }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "0.1rem",
                  overflow: "hidden",
                  aspectRatio: "1/1.2",
                  filter: "grayscale(20%)",
                }}
              >
                <Image
                  src="/images/story-editorial.png"
                  alt="ZIRUVA master artisan hand-stitching a luxury leather handbag"
                  fill
                  sizes="(max-width: 860px) 100vw, 35vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.5rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  SERIAL NO.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600 }}>
                  ZR-2024-LDN
                </p>
              </div>

              {/* Dual rotating rings */}
              <div style={{ position: "relative", width: "54px", height: "54px" }}>
                <motion.div
                  style={{ position: "absolute", inset: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100">
                    <path
                      id="outerPath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      fill="none"
                    />
                    <text
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "11px",
                        fill: "var(--accent-brown)",
                      }}
                    >
                      <textPath xlinkHref="#outerPath">MAISON ZIRUVA · LONDON ·</textPath>
                    </text>
                  </svg>
                </motion.div>
                <motion.div
                  style={{ position: "absolute", inset: "10px" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100">
                    <path
                      id="innerPath"
                      d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                      fill="none"
                    />
                    <text
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "14px",
                        fill: "var(--text-secondary)",
                        opacity: 0.35,
                      }}
                    >
                      <textPath xlinkHref="#innerPath">ORIGIN ORIGIN</textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Precision <br />
                <span style={{ color: "var(--accent-brown)" }}>Craftsmanship</span>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "1.2rem",
                }}
              >
                A study in restraint. Each ZIRUVA silhouette is built from the inside out, ensuring
                structural integrity that lasts generations.
              </p>

              {/* Pull-quote */}
              <blockquote
                style={{
                  borderLeft: "2px solid var(--accent-brown)",
                  paddingLeft: "1rem",
                  margin: "0 0 1.5rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.55,
                  color: "var(--text-secondary)",
                }}
              >
                &ldquo;We make twelve bags a month. That is not a limitation. That is the point.&rdquo;
                <footer
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.4rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent-brown)",
                    marginTop: "0.45rem",
                    fontStyle: "normal",
                  }}
                >
                  — Founder, Maison ZIRUVA
                </footer>
              </blockquote>

              <div style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "1.5rem" }}>
                {[
                  { label: "Material", val: "Grade A Full-Grain" },
                  { label: "Hardware", val: "Bespoke Solid Brass" },
                  { label: "Thread", val: "Waxed Linen Cord" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.5rem",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500 }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Count-up stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(43,43,43,0.1)",
                marginTop: "1.5rem",
                border: "1px solid rgba(43,43,43,0.1)",
              }}
            >
              {[
                { val: 12, suffix: "", label: "bags / month" },
                { val: 36, suffix: "h", label: "per bag" },
                { val: 3, suffix: "", label: "artisans" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{ background: "var(--cream)", padding: "0.9rem 1rem", textAlign: "center" }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.45rem",
                      fontWeight: 300,
                      color: "var(--accent-brown)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    <CountUp to={s.val} suffix={s.suffix} />
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.4rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-meta)",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Artisan Signature */}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "flex-end",
                opacity: 0.4,
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  borderTop: "1px solid var(--text-primary)",
                  paddingTop: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.8rem",
                    fontStyle: "italic",
                    marginBottom: "0.1rem",
                  }}
                >
                  M. artisan
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.4rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  APPROVED FOR ARCHIVE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function StorySection() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileStory /> : <DesktopStory />;
}
