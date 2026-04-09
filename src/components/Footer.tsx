"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Collection: ["La Signature", "La Saison", "L'Édition", "New Arrivals"],
  "The Maison": ["Our Story", "Atelier", "Craftsmanship", "Sustainability"],
  Services: ["Bespoke Orders", "Care & Repair", "Gifting", "Returns"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookies", "Accessibility"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--text-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "1px", background: "rgba(252,248,240,0.06)" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" id="footer-logo" aria-label="ZIRUVA — Luxury Leather Handbags, home" style={{ textDecoration: "none", display: "block", marginBottom: "1.5rem" }}>
              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  filter: "brightness(0) invert(0.9)", // Soft cream-white for dark background
                }}
              >
                {["z", "i", "r", "u", "v", "a"].map((letter, idx) => {
                  const widths: Record<string, string> = {
                    z: "18px",
                    i: "4px",
                    r: "18px",
                    u: "17px",
                    v: "20px",
                    a: "20px",
                  };
                  const margins: Record<string, string> = {
                    z: "0.8rem",
                    i: "0.6rem",
                    r: "0.5rem",
                    u: "0.5rem",
                    v: "0.3rem",
                    a: "0",
                  };
                  return (
                    <motion.div
                      key={`${letter}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.08 }}
                      style={{ 
                        position: "relative", 
                        height: "22px", 
                        width: widths[letter],
                        marginRight: margins[letter]
                      }}
                    >
                      <Image
                        src={`/images/logo/${letter}.png`}
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "rgba(252,248,240,0.35)",
                maxWidth: "200px",
                marginBottom: "2rem",
              }}
            >
              Exquisite leather handbags.
              <br />
              Designed in the UK.
              <br />
              Crafted for legacy.
            </p>
            <div style={{ display: "flex", gap: "1.4rem" }}>
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <a
                  key={s}
                  href="#"
                  id={`social-${s.toLowerCase()}`}
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.58rem",
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(252,248,240,0.28)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-brown)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(252,248,240,0.28)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * (i + 1) }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.58rem",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(252,248,240,0.3)",
                  marginBottom: "1.5rem",
                }}
              >
                {cat}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        color: "rgba(252,248,240,0.5)",
                        textDecoration: "none",
                        letterSpacing: "0.01em",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-brown)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(252,248,240,0.5)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(252,248,240,0.06)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1.5rem 4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(252,248,240,0.18)",
            }}
          >
            © {new Date().getFullYear()} Maison ZIRUVA. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(252,248,240,0.18)",
            }}
          >
            Designed in London · Crafted with Love
          </p>
        </div>
      </div>

      {/* Watermark Logo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          opacity: 0.015,
          pointerEvents: "none",
          userSelect: "none",
          paddingBottom: "0.5rem",
          filter: "brightness(0) invert(1)",
        }}
      >
        {["z", "i", "r", "u", "v", "a"].map((letter, idx) => {
          // Approximate widths based on native aspect ratios for massive scale
          const watermarkWidths: Record<string, string> = {
            z: "clamp(3rem, 10vw, 9rem)",
            i: "clamp(0.8rem, 2.5vw, 2.2rem)",
            r: "clamp(3rem, 10vw, 9rem)",
            u: "clamp(3rem, 10vw, 9rem)",
            v: "clamp(3.5rem, 11vw, 10rem)",
            a: "clamp(3.5rem, 11vw, 10rem)",
          };
          const watermarkMargins: Record<string, string> = {
            z: "calc(0.5rem + 2vw)",
            i: "calc(0.5rem + 1.5vw)",
            r: "calc(0.5rem + 1.2vw)",
            u: "calc(0.5rem + 1.2vw)",
            v: "calc(0.2rem + 0.5vw)",
            a: "0",
          };
          return (
            <motion.div
              key={`watermark-${letter}-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: idx * 0.15 }}
              style={{
                position: "relative",
                height: "clamp(4rem, 13vw, 11rem)",
                width: watermarkWidths[letter],
                marginRight: watermarkMargins[letter],
              }}
            >
              <Image
                src={`/images/logo/${letter}.png`}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
