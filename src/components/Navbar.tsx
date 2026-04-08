"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Atelier", href: "#features" },
  { label: "Contact", href: "#newsletter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Fixed header wrapper (announcement + nav) ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Announcement bar */}
        <div
          style={{
            background: "var(--text-primary)",
            position: "relative",
            overflow: "hidden",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--cream)",
            }}
          >
            New Drop: La Saison SS25 — Limited to 40 Pieces
          </p>
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "8rem",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
              animation: "announcementShimmer 3s linear infinite",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Main nav */}
        <nav
          style={{
            background: scrolled ? "rgba(252,248,240,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(43,43,43,0.07)"
              : "1px solid transparent",
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "68px",
              position: "relative",
            }}
          >
            {/* Left nav links */}
            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--accent-brown)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Centered logo */}
            <Link
              href="/"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                }}
              >
                ZIRUVA
              </span>
            </Link>

            {/* Right nav links, desktop */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                alignItems: "center",
              }}
              className="hidden-mobile"
            >
              {navLinks.slice(2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--accent-brown)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#collection"
                id="nav-shop-btn"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  border: "1px solid var(--text-primary)",
                  padding: "0.55rem 1.4rem",
                  transition: "all 0.4s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "var(--text-primary)";
                  el.style.color = "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "transparent";
                  el.style.color = "var(--text-primary)";
                }}
              >
                Shop
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
              className="show-mobile"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    height: "1px",
                    background: "var(--text-primary)",
                    transition: "all 0.3s ease",
                    width: i === 1 ? "16px" : "24px",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                    transform:
                      menuOpen && i === 0
                        ? "rotate(45deg) translate(4px, 4px)"
                        : menuOpen && i === 2
                        ? "rotate(-45deg) translate(4px, -4px)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "var(--cream)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
