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
  const textY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      ref={sectionRef}
      id="story"
      style={{ background: "var(--surface)", padding: "7rem 0", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="story-grid"
        >
          {/* Left: Image */}
          <motion.div style={{ scale: imageScale }} className="story-image">
            <div
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                aspectRatio: "4/5",
              }}
            >
              <Image
                src="/images/story-editorial.png"
                alt="ZIRUVA — editorial campaign, London marble steps"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-2rem",
                background: "var(--cream)",
                border: "1px solid rgba(43,43,43,0.1)",
                padding: "1.4rem 1.8rem",
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
                  marginBottom: "0.35rem",
                }}
              >
                Philosophy
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                }}
              >
                Quiet Luxury
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div style={{ y: textY }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                display: "block",
                marginBottom: "2rem",
              }}
            >
              Our Craft — Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              Crafted with
              <br />
              Precision,
              <br />
              <span style={{ color: "var(--accent-brown)" }}>
                Designed for Legacy
              </span>
            </motion.h2>

            <div
              style={{
                width: "36px",
                height: "1px",
                background: "var(--accent-brown)",
                marginBottom: "2rem",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.86rem",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--text-secondary)",
                maxWidth: "420px",
                marginBottom: "1.2rem",
              }}
            >
              ZIRUVA was born from a belief that true luxury is not loud — it
              is felt. Every stitch, every edge, every clasp is a deliberate
              act of care from artisans who have devoted their lives to their
              craft.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.86rem",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--text-secondary)",
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Designed in London. Born in craft. Each collection is a limited
              chapter — released, loved, and then permanently retired.
            </motion.p>

            {/* Micro stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: "flex",
                gap: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(43,43,43,0.09)",
              }}
            >
              {[
                { value: "100%", label: "Genuine Leather" },
                { value: "Hand", label: "Stitched" },
                { value: "↑", label: "Sustainable" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "var(--accent-brown)",
                      marginBottom: "0.2rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {item.value}
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
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .story-image { display: none; }
        }
      `}</style>
    </section>
  );
}
