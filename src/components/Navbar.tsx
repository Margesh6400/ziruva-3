"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useIsMobile } from "@/hooks/useMediaQuery";

const navLinks = [
  { label: "Collection", href: "/collection", hasDropdown: "collection" },
  { label: "Our Story", href: "/story" },
  { label: "Atelier", href: "/how", hasDropdown: "atelier" },
  { label: "Contact", href: "/#newsletter" },
];

const atelierLinks = [
  { name: "Bespoke", desc: "One-of-a-Kind Creations", href: "/how" },
  { name: "Craftsmanship", desc: "The Art of Hand-Stitching", href: "/how" },
  { name: "Restoration", desc: "Preserving Heritage", href: "/how" },
  { name: "Materials", desc: "Grade-A Italian Leathers", href: "/how" },
];

const collections = [
  { name: "Hero Series", desc: "The Seasonal Icons", href: "/collection" },
  { name: "Signature", desc: "Timeless Essentials", href: "/collection" },
  { name: "L'Édition", desc: "Limited Artist Pieces", href: "/collection" },
  { name: "The Archive", desc: "View Full History", href: "/collection" },
];

const announcements = [
  "SS25: La Saison — Limited Edition",
  "Free shipping on orders over £200",
  "New drops every season — join the waitlist",
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [annIdx, setAnnIdx] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileCollectionOpen, setMobileCollectionOpen] = useState(false);
  const [mobileAtelierOpen, setMobileAtelierOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setAnnIdx((p) => (p + 1) % announcements.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-family: var(--font-fashion);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.35s ease;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--accent-brown);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link:hover {
          color: var(--text-primary);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-shop-btn {
          font-family: var(--font-fashion);
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--text-primary);
          text-decoration: none;
          border: 1px solid rgba(43,43,43,0.35);
          padding: 0.52rem 1.4rem;
          transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
        }
        .nav-shop-btn:hover {
          background: var(--text-primary);
          color: var(--cream);
          border-color: var(--text-primary);
        }
        .mega-link {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .mega-link-title {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.35rem;
          font-weight: 300;
          color: var(--text-primary);
          transition: color 0.3s ease, transform 0.3s ease;
          display: block;
        }
        .mega-link:hover .mega-link-title {
          color: var(--accent-brown);
          transform: translateX(4px);
        }
        .mega-link-desc {
          font-family: var(--font-fashion);
          font-size: 0.55rem;
          color: var(--text-meta);
          letter-spacing: 0.08em;
          display: block;
          transition: color 0.3s ease;
        }
        .mega-link:hover .mega-link-desc {
          color: var(--text-secondary);
        }
        .mobile-nav-item {
          font-family: "Cormorant Garamond", serif;
          font-size: 2.6rem;
          font-weight: 300;
          color: var(--text-primary);
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .mobile-nav-item:hover {
          color: var(--accent-brown);
        }
      `}</style>

      {/* ── Fixed header wrapper ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Announcement Bar */}
        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              style={{
                background: "var(--text-primary)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
              }}
            >
              <div style={{ padding: isMobile ? "7px 0" : "9px 0", flex: 1, textAlign: "center", overflow: "hidden" }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={annIdx}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.38 }}
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: isMobile ? "0.5rem" : "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--cream)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: isMobile ? "0.5rem" : "1rem",
                    }}
                  >
                    {!isMobile && <span style={{ opacity: 0.4, fontSize: "0.35rem" }}>◆</span>}
                    {announcements[annIdx]}
                    {!isMobile && <span style={{ opacity: 0.4, fontSize: "0.35rem" }}>◆</span>}
                  </motion.p>
                </AnimatePresence>
              </div>

              <button
                onClick={() => setShowAnnouncement(false)}
                style={{
                  position: "absolute",
                  right: isMobile ? "0.8rem" : "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(252,248,240,0.45)",
                  transition: "color 0.3s ease",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(252,248,240,0.45)")}
                aria-label="Close announcement"
              >
                <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                  <path d="M1 1L8 8M8 1L1 8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main Nav ── */}
        <nav
          style={{
            /* Mobile: always solid cream — never transparent */
            background: isMobile
              ? "rgba(252,248,240,1)"
              : scrolled ? "rgba(252,248,240,0.9)" : "transparent",
            backdropFilter: !isMobile && scrolled ? "blur(24px) saturate(180%)" : "none",
            WebkitBackdropFilter: !isMobile && scrolled ? "blur(24px) saturate(180%)" : "none",
            /* Desktop only: floating-pill shape + side margin */
            borderRadius: !isMobile && scrolled ? "4px" : "0",
            margin: !isMobile && scrolled ? "0 1.5rem" : "0",
            transform: !isMobile && scrolled ? "translateY(10px)" : "translateY(0)",
            boxShadow: !isMobile && scrolled
              ? "0 1px 0 rgba(255,255,255,0.7) inset, 0 4px 24px rgba(43,30,20,0.07), 0 1px 3px rgba(43,30,20,0.04)"
              : "none",
            /* Explicit individual borders — no shorthand/longhand conflict */
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "1px",
            borderBottomWidth: "1px",
            borderStyle: "solid",
            borderTopColor: !isMobile && scrolled ? "rgba(255,255,255,0.5)" : "transparent",
            borderRightColor: !isMobile && scrolled ? "rgba(255,255,255,0.5)" : "transparent",
            borderLeftColor: !isMobile && scrolled ? "rgba(255,255,255,0.5)" : "transparent",
            borderBottomColor: isMobile
              ? "rgba(43,43,43,0.08)"
              : scrolled ? "rgba(255,255,255,0.5)" : "transparent",
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div
            style={{
              maxWidth: "1320px",
              margin: "0 auto",
              /* Tighter side padding on mobile so hamburger + logo don't clash */
              padding: isMobile ? "0 1.25rem" : "0 3.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: isMobile ? "56px" : scrolled ? "56px" : "66px",
              transition: "height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              position: "relative",
            }}
          >
            {/* ── Desktop: Left links ── */}
            {!isMobile && (
              <div style={{ display: "flex", gap: "2.8rem", alignItems: "center" }}>
                {navLinks.slice(0, 2).map((link) => (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.hasDropdown)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                    style={{
                      height: scrolled ? "56px" : "66px",
                      display: "flex",
                      alignItems: "center",
                      transition: "height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <Link href={link.href} className="nav-link">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* ── Centered Logo ── */}
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
                  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
                }}
                style={{ display: "flex", alignItems: "center" }}
              >
                {["z", "i", "r", "u", "v", "a"].map((letter, idx) => {
                  const widths: Record<string, string> = {
                    z: isMobile ? "18px" : "22px", 
                    i: isMobile ? "5px" : "6px", 
                    r: isMobile ? "18px" : "22px", 
                    u: isMobile ? "17px" : "21px", 
                    v: isMobile ? "19px" : "24px", 
                    a: isMobile ? "19px" : "24px",
                  };
                  const margins: Record<string, string> = {
                    z: isMobile ? "0.7rem" : "0.9rem", 
                    i: isMobile ? "0.7rem" : "0.9rem", 
                    r: isMobile ? "0.5rem" : "0.7rem", 
                    u: isMobile ? "0.5rem" : "0.7rem", 
                    v: isMobile ? "0.3rem" : "0.4rem", 
                    a: "0",
                  };
                  return (
                    <motion.div
                      key={`${letter}-${idx}`}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                      style={{
                        position: "relative",
                        height: isMobile ? "20px" : "26px",
                        width: widths[letter],
                        marginRight: margins[letter],
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

            {/* ── Desktop: Full-width mega dropdown ── */}
            <div
              onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                pointerEvents: activeDropdown ? "auto" : "none",
              }}
            >
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      width: "100%",
                      background: "rgba(252,248,240,0.98)",
                      backdropFilter: "blur(24px)",
                      borderTop: "1px solid rgba(43,43,43,0.06)",
                      borderBottom: "1px solid rgba(43,43,43,0.06)",
                      boxShadow: "0 20px 40px -8px rgba(0,0,0,0.07)",
                      padding: "3.5rem 4rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1.3fr",
                      gap: "4rem",
                    }}
                  >
                    {/* Column 1 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-fashion)",
                          fontSize: "0.5rem",
                          fontWeight: 600,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--text-meta)",
                          marginBottom: "1.8rem",
                          display: "block",
                        }}
                      >
                        {activeDropdown === "collection" ? "The Archives" : "Bespoke Services"}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                        {(activeDropdown === "collection" ? collections : atelierLinks)
                          .slice(0, 2)
                          .map((col, idx) => (
                            <motion.div
                              key={col.name}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.06 }}
                            >
                              <Link href={col.href} className="mega-link">
                                <span className="mega-link-title">{col.name}</span>
                                <span className="mega-link-desc">{col.desc}</span>
                              </Link>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-fashion)",
                          fontSize: "0.5rem",
                          opacity: 0,
                          marginBottom: "1.8rem",
                          display: "block",
                          userSelect: "none",
                          pointerEvents: "none",
                        }}
                      >
                        ·
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                        {(activeDropdown === "collection" ? collections : atelierLinks)
                          .slice(2)
                          .map((col, idx) => (
                            <motion.div
                              key={col.name}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (idx + 2) * 0.06 }}
                            >
                              <Link href={col.href} className="mega-link">
                                <span className="mega-link-title">{col.name}</span>
                                <span className="mega-link-desc">{col.desc}</span>
                              </Link>
                            </motion.div>
                          ))}
                      </div>
                    </div>

                    {/* Column 3: Featured image */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4/3",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={
                            activeDropdown === "collection"
                              ? products.find((p) => p.id === "la-prisme")?.image || "/images/hero-geometric.jpg"
                              : "/images/story-detail.png"
                          }
                          alt={
                            activeDropdown === "collection"
                              ? "ZIRUVA La Prisme — SS25 featured piece"
                              : "ZIRUVA Atelier — master craftsman at work"
                          }
                          fill
                          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                          className="mega-img"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "1.4rem",
                            left: "1.4rem",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.6rem",
                              color: "rgba(252,248,240,0.6)",
                              fontFamily: "var(--font-fashion)",
                              fontSize: "0.48rem",
                              letterSpacing: "0.28em",
                              textTransform: "uppercase",
                              marginBottom: "4px",
                            }}
                          >
                            <span style={{ width: "16px", height: "1px", background: "rgba(252,248,240,0.4)", display: "inline-block" }} />
                            {activeDropdown === "collection" ? "New Highlight" : "Our Legacy"}
                          </span>
                          <span
                            style={{
                              color: "var(--cream)",
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.25rem",
                              fontWeight: 300,
                              display: "block",
                            }}
                          >
                            {activeDropdown === "collection"
                              ? products.find((p) => p.id === "la-prisme")?.name || "La Prisme"
                              : "The Art of Atelier"}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={activeDropdown === "collection" ? "/collection" : "/how"}
                        style={{
                          fontFamily: "var(--font-fashion)",
                          fontSize: "0.56rem",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-brown)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      >
                        {activeDropdown === "collection" ? "Shop the Story" : "Discover the Process"}
                        <span style={{ fontSize: "0.7rem" }}>→</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Desktop: Right links + CTA ── */}
            {!isMobile && (
              <div style={{ display: "flex", gap: "2.8rem", alignItems: "center" }}>
                {navLinks.slice(2).map((link) => (
                  <div
                    key={link.label}
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.hasDropdown)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                    style={{
                      height: scrolled ? "56px" : "66px",
                      display: "flex",
                      alignItems: "center",
                      transition: "height 0.6s ease",
                    }}
                  >
                    <Link href={link.href} className="nav-link">
                      {link.label}
                    </Link>
                  </div>
                ))}

                <a href="#collection" className="nav-shop-btn">
                  Shop
                </a>
              </div>
            )}

            {/* ── Mobile: Hamburger ── */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  zIndex: 1001,
                }}
              >
                {[0, 1].map((i) => (
                  <motion.span
                    key={i}
                    animate={
                      menuOpen
                        ? i === 0
                          ? { rotate: 45, y: 4, width: 24 }
                          : { rotate: -45, y: -4, width: 24 }
                        : { rotate: 0, y: 0, opacity: 1, width: i === 0 ? 24 : 16 }
                    }
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      display: "block",
                      height: "1px",
                      background: "var(--text-primary)",
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
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
              zIndex: 998,
              background: "var(--cream)",
              display: "flex",
              flexDirection: "column",
              padding: "0 2rem",
              paddingTop: "100px"
            }}
          >
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((link, i) => (
                <div
                  key={link.label}
                  style={{
                    borderBottom: "1px solid rgba(43,43,43,0.06)",
                    padding: "1.2rem 0",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <div
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        width: "100%" 
                      }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setMenuOpen(false)}
                        className="mobile-nav-item"
                        style={{ fontSize: "2.4rem", flex: 1 }}
                      >
                        {link.label}
                      </Link>
                      
                      {link.hasDropdown && (
                        <button
                          onClick={() => {
                            if (link.hasDropdown === "collection") setMobileCollectionOpen(!mobileCollectionOpen);
                            if (link.hasDropdown === "atelier") setMobileAtelierOpen(!mobileAtelierOpen);
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            padding: "1rem",
                            cursor: "pointer"
                          }}
                        >
                          <motion.span
                            animate={{ rotate: (link.hasDropdown === "collection" ? mobileCollectionOpen : mobileAtelierOpen) ? 45 : 0 }}
                            style={{ fontSize: "1.5rem", color: "var(--text-meta)", display: "block" }}
                          >
                            +
                          </motion.span>
                        </button>
                      )}
                    </div>

                    {link.hasDropdown && (
                      <AnimatePresence>
                        {((link.hasDropdown === "collection" && mobileCollectionOpen) ||
                          (link.hasDropdown === "atelier" && mobileAtelierOpen)) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            style={{ overflow: "hidden", display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1.5rem" }}
                          >
                            {(link.hasDropdown === "collection" ? collections : atelierLinks).map((col) => (
                              <Link
                                key={col.name}
                                href={col.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                  fontFamily: "var(--font-fashion)",
                                  fontSize: "0.65rem",
                                  fontWeight: 500,
                                  color: "var(--text-secondary)",
                                  textDecoration: "none",
                                  letterSpacing: "0.22em",
                                  textTransform: "uppercase",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.8rem",
                                  paddingLeft: "0.5rem"
                                }}
                              >
                                <span style={{ width: "12px", height: "1px", background: "var(--accent-brown)", opacity: 0.4 }} />
                                {col.name}
                              </Link>
                            ))}
                            <Link
                              href={link.href}
                              onClick={() => setMenuOpen(false)}
                              style={{
                                fontFamily: "var(--font-fashion)",
                                fontSize: "0.65rem",
                                fontWeight: 600,
                                color: "var(--text-primary)",
                                textDecoration: "none",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                padding: "0.8rem 0",
                                borderTop: "1px solid rgba(43,43,43,0.03)",
                                marginTop: "0.5rem",
                                display: "block",
                                paddingLeft: "0.5rem"
                              }}
                            >
                              View All {link.label} →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Mobile Footer */}
            <div style={{ padding: "2rem 0 3.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(43,43,43,0.06)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-meta)", marginBottom: "0.4rem" }}>
                  Maison ZIRUVA
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                  London, United Kingdom
                </p>
              </div>
              <Link 
                href="/collection" 
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  background: "var(--text-primary)",
                  padding: "0.8rem 1.6rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
