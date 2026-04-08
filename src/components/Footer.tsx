"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
            <Link href="/" id="footer-logo" style={{ textDecoration: "none", display: "block", marginBottom: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                }}
              >
                ZIRUVA
              </span>
            </Link>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
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
                    fontFamily: "'Montserrat', sans-serif",
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
                  fontFamily: "'Montserrat', sans-serif",
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
                        fontFamily: "'Montserrat', sans-serif",
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
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(252,248,240,0.18)",
            }}
          >
            © {new Date().getFullYear()} Maison ZIRUVA. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              color: "rgba(252,248,240,0.18)",
            }}
          >
            Designed in London · Crafted with Love
          </p>
        </div>
      </div>

      {/* Watermark */}
      <p
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 13vw, 11rem)",
          fontWeight: 300,
          color: "rgba(252,248,240,0.015)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
          paddingBottom: "0.5rem",
        }}
      >
        ZIRUVA
      </p>

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
