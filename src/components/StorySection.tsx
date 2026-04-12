"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.02]);
  const detailY = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      id="story"
      style={{
        background: "var(--surface)",
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
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
          }}
          className="story-grid"
        >
          {/* Metadata Sidebar Header */}
          <div style={{
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
            zIndex: 10
          }}>
            Atelier Dossier — Vol. IV
          </div>

          {/* Left: Visual Module */}
          <div style={{ position: "relative", borderRight: "1px solid rgba(43,43,43,0.08)", paddingRight: "3rem" }} className="story-visual">
            <motion.div style={{ scale: imageScale }} className="story-image-main">
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
                  alt="ZIRUVA master artisan hand-stitching a luxury leather handbag — traditional awl and needle technique at the Maison ZIRUVA atelier, London"
                  fill
                  sizes="(max-width: 860px) 100vw, 35vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>

            {/* Micro Badge */}
            <div style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}>
              <div>
                <p style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>SERIAL NO.</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600 }}>ZR-2024-LDN</p>
              </div>
              <motion.div
                style={{ width: "50px", height: "50px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100">
                  <path id="smallPath" d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                  <text style={{ fontFamily: "var(--font-fashion)", fontSize: "14px", fill: "var(--accent-brown)" }}>
                    <textPath xlinkHref="#smallPath">ORIGIN ORIGIN</textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Right: Technical Module */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
                  marginBottom: "2rem",
                }}
              >
                A study in restraint. Each ZIRUVA silhouette is built from the inside out, ensuring structural integrity that lasts generations.
              </p>

              {/* Modular Process List */}
              <div style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "1.5rem" }}>
                {[
                  { label: "Material", val: "Grade A Full-Grain" },
                  { label: "Hardware", val: "Bespoke Solid Brass" },
                  { label: "Thread", val: "Waxed Linen Cord" }
                ].map((item) => (
                  <div key={item.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.6rem"
                  }}>
                    <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", color: "var(--text-secondary)", textTransform: "uppercase" }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 500 }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Specs Block */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(43,43,43,0.1)",
              marginTop: "2rem",
              border: "1px solid rgba(43,43,43,0.1)"
            }}>
              {[
                { label: "HAND-STITCHED", sub: "Traditional Awl & Needle" },
                { label: "HAND-PAINTED", sub: "Triple-Layer Edging" }
              ].map((spec) => (
                <div key={spec.label} style={{ background: "var(--cream)", padding: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", color: "var(--accent-brown)", fontWeight: 700, marginBottom: "0.2rem" }}>{spec.label}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--text-secondary)" }}>{spec.sub}</p>
                </div>
              ))}
            </div>

            {/* Added: Artisan Signature Seal */}
            <div style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "flex-end",
              opacity: 0.4
            }}>
              <div style={{ textAlign: "right", borderTop: "1px solid var(--text-primary)", paddingTop: "0.5rem" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", fontStyle: "italic", marginBottom: "0.1rem" }}>M. artisan</p>
                <p style={{ fontFamily: "var(--font-fashion)", fontSize: "0.4rem", letterSpacing: "0.1em" }}>APPROVED FOR ARCHIVE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 6rem !important; }
          .story-image-detail { display: none; }
          .story-image-main { max-width: 90%; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
