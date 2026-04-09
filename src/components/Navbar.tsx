"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Collection", href: "/collection", hasDropdown: true },
  { label: "Our Story", href: "/#story" },
  { label: "Atelier", href: "/how" },
  { label: "Contact", href: "/#newsletter" },
];

const collections = [
  { name: "La Maison", desc: "Heritage & Craft", href: "#collection" },
  { name: "Signature", desc: "Timeless Essentials", href: "#collection" },
  { name: "SS25 Drop", desc: "Limited Edition", href: "#collection" },
  { name: "Atelier", desc: "Bespoke Services", href: "#collection" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCollectionOpen, setMobileCollectionOpen] = useState(false);

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
        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0, marginTop: -40 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              style={{
                background: "var(--text-primary)",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
              }}
            >
              <div style={{ padding: "10px 0", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                  }}
                >
                  New Drop: La Saison SS25 — Limited to 40 Pieces
                </p>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setShowAnnouncement(false)}
                style={{
                  position: "absolute",
                  right: "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--cream)",
                  opacity: 0.6,
                  transition: "opacity 0.3s ease",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
                aria-label="Close announcement"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </button>

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
            </motion.div>
          )}
        </AnimatePresence>

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
                <div
                  key={link.label}
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                  style={{ 
                    position: "relative", 
                    height: "68px", 
                    display: "flex", 
                    alignItems: "center" 
                  }}
                >
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-fashion)",
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
                </div>
              ))}
            </div>

            {/* Centered logo */}
            <Link
              href="/"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                textDecoration: "none",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {["z", "i", "r", "u", "v", "a"].map((letter, idx) => {
                  const widths: Record<string, string> = {
                    z: "22px",
                    i: "6px",
                    r: "22px",
                    u: "21px",
                    v: "24px",
                    a: "24px",
                  };
                  // Bespoke kerning for each character pair
                  const margins: Record<string, string> = {
                    z: "0.9rem",
                    i: "0.9rem",
                    r: "0.7rem",
                    u: "0.7rem",
                    v: "0.4rem",
                    a: "0",
                  };
                  return (
                    <motion.div
                      key={`${letter}-${idx}`}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                      style={{ 
                        position: "relative", 
                        height: "28px", 
                        width: widths[letter],
                        marginRight: margins[letter]
                      }}
                    >
                      <Image
                        src={`/images/logo/${letter}.png`}
                        alt={letter.toUpperCase()}
                        fill
                        priority
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </Link>

            {/* Desktop Full-Width Mega Menu Dropdown */}
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                pointerEvents: dropdownOpen ? "auto" : "none",
              }}
            >
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                      width: "100%",
                      background: "rgba(252,248,240,0.98)",
                      backdropFilter: "blur(20px)",
                      borderTop: "1px solid rgba(43,43,43,0.05)",
                      borderBottom: "1px solid rgba(43,43,43,0.08)",
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
                      padding: "4rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1.2fr",
                      gap: "4rem",
                      zIndex: 100,
                    }}
                  >
                    {/* Collections List - Column 1 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                      <span style={{ 
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.55rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-meta)",
                        marginBottom: "0.5rem",
                        display: "block"
                      }}>
                        The Archives
                      </span>
                      {collections.slice(0, 2).map((col, idx) => (
                        <motion.a
                          key={col.name}
                          href={col.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ 
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.4rem",
                              color: "var(--text-primary)",
                              display: "block"
                            }}>
                              {col.name}
                            </span>
                            <span style={{ 
                              fontFamily: "var(--font-fashion)",
                              fontSize: "0.6rem",
                              color: "var(--text-secondary)",
                              letterSpacing: "0.05em",
                              marginTop: "4px"
                            }}>
                              {col.desc}
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* Collections List - Column 2 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                      <span style={{ 
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.55rem",
                        opacity: 0,
                        display: "block"
                      }}>
                        spacer
                      </span>
                      {collections.slice(2).map((col, idx) => (
                        <motion.a
                          key={col.name}
                          href={col.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx + 2) * 0.05 }}
                          style={{ textDecoration: "none" }}
                        >
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ 
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.4rem",
                              color: "var(--text-primary)",
                              display: "block"
                            }}>
                              {col.name}
                            </span>
                            <span style={{ 
                              fontFamily: "var(--font-fashion)",
                              fontSize: "0.6rem",
                              color: "var(--text-secondary)",
                              letterSpacing: "0.05em",
                              marginTop: "4px"
                            }}>
                              {col.desc}
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* Featured Preview - Column 3 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                      <div style={{ 
                        width: "100%", 
                        aspectRatio: "16/9", 
                        background: "var(--surface)",
                        position: "relative",
                        overflow: "hidden"
                      }}>
                        <img 
                          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200" 
                          alt="Featured Collection"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                        <div style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4))"
                        }} />
                        <div style={{
                          position: "absolute",
                          bottom: "1.5rem",
                          left: "1.5rem",
                        }}>
                          <span style={{
                            color: "white",
                            fontFamily: "var(--font-fashion)",
                            fontSize: "0.5rem",
                            fontWeight: 600,
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "4px"
                          }}>
                            Seasonal Campaign
                          </span>
                          <span style={{
                            color: "white",
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1.2rem",
                            display: "block"
                          }}>
                            La Saison SS25
                          </span>
                        </div>
                      </div>
                      <a href="#collection" style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.62rem",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--text-primary)",
                        alignSelf: "flex-start",
                        paddingBottom: "1px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase"
                      }}>
                        Shop the Story
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                    fontFamily: "var(--font-fashion)",
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
              <div key={link.label} style={{ width: "100%", textAlign: "center" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
                >
                  <div 
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobileCollectionOpen(!mobileCollectionOpen);
                      } else {
                        setMenuOpen(false);
                        window.location.href = link.href;
                      }
                    }}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.4rem",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem"
                    }}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <motion.span
                        animate={{ rotate: mobileCollectionOpen ? 180 : 0 }}
                        style={{ fontSize: "1.2rem", display: "inline-block", marginTop: "4px" }}
                      >
                        ↓
                      </motion.span>
                    )}
                  </div>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {mobileCollectionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "1.2rem" }}
                        >
                          {collections.map((col) => (
                            <a
                              key={col.name}
                              href={col.href}
                              onClick={() => setMenuOpen(false)}
                              style={{
                                fontFamily: "var(--font-fashion)",
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase"
                              }}
                            >
                              {col.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              </div>
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
