"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const YEAR = new Date().getFullYear();

const nav = [
  {
    heading: "Collection",
    links: [
      { label: "La Signature", href: "/collection" },
      { label: "Hero Series", href: "/collection" },
      { label: "L'Édition", href: "/collection" },
      { label: "View All Pieces", href: "/collection" },
    ],
  },
  {
    heading: "The Maison",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "The Atelier", href: "/how" },
      { label: "How We Make It", href: "/how" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    heading: "Client",
    links: [
      { label: "Bespoke Orders", href: "#" },
      { label: "Care & Repair", href: "#" },
      { label: "Returns", href: "/refund-policy" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookies", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.2-.78 1.31-5.56 1.31-5.56s-.34-.67-.34-1.66c0-1.56.91-2.73 2.04-2.73.96 0 1.43.72 1.43 1.59 0 .97-.62 2.43-.94 3.78-.27 1.13.56 2.04 1.67 2.04 2 0 3.34-2.57 3.34-5.61 0-2.31-1.56-3.93-3.79-3.93-2.58 0-4.1 1.94-4.1 3.93 0 .78.3 1.61.67 2.07.07.09.08.17.06.26-.07.28-.22.9-.25 1.02-.04.16-.13.2-.3.12-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.07-5.45 5.97-5.45 3.13 0 5.57 2.23 5.57 5.21 0 3.11-1.96 5.61-4.68 5.61-.91 0-1.77-.47-2.07-1.03l-.56 2.1c-.2.78-.75 1.76-1.12 2.36.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="14" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.68a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
];

/* ── Logo mark — letter PNGs ── */
function LogoMark({ height = 20 }: { height?: number }) {
  const widths: Record<string, number> = { z: 18, i: 4, r: 17, u: 17, v: 19, a: 19 };
  const margins: Record<string, number> = { z: 13, i: 10, r: 9, u: 9, v: 5, a: 0 };
  return (
    <div style={{ display: "flex", alignItems: "center", filter: "brightness(0) invert(0.88)" }}>
      {["z", "i", "r", "u", "v", "a"].map((l, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            height,
            width: widths[l],
            marginRight: margins[l],
            flexShrink: 0,
          }}
        >
          <Image src={`/images/logo/${l}.png`} alt="" fill style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}

/* ── Newsletter input ── */
function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 0, maxWidth: "360px", width: "100%" }}>
      {sent ? (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "var(--accent-brown)",
            letterSpacing: "0.04em",
            paddingTop: "0.6rem",
          }}
        >
          Thank you — you&apos;re on the list.
        </p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              background: "rgba(252,248,240,0.06)",
              border: "1px solid rgba(252,248,240,0.14)",
              borderRight: "none",
              color: "rgba(252,248,240,0.85)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 300,
              padding: "0.7rem 1rem",
              outline: "none",
              letterSpacing: "0.02em",
            }}
          />
          <button
            type="submit"
            style={{
              background: "var(--accent-brown)",
              border: "none",
              color: "var(--cream)",
              fontFamily: "var(--font-fashion)",
              fontSize: "0.52rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              padding: "0.7rem 1.2rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Join
          </button>
        </>
      )}
    </form>
  );
}

/* ══════════════════════════════════════════════
   FOOTER — single responsive component
══════════════════════════════════════════════ */
export default function Footer() {
  return (
    <footer className="ziruva-footer" aria-label="Site footer">
      {/* ── Gold top accent line ── */}
      <div className="footer-gold-line" />

      {/* ── Newsletter strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="footer-newsletter"
      >
        <div className="footer-newsletter-inner">
          <div className="footer-newsletter-copy">
            <p className="footer-newsletter-eyebrow">First access to new drops</p>
            <h2 className="footer-newsletter-headline">
              Join the Maison.
            </h2>
          </div>
          <NewsletterInput />
        </div>
      </motion.div>

      {/* ── Main grid ── */}
      <div className="footer-main">
        {/* Brand column */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" aria-label="ZIRUVA home" style={{ textDecoration: "none", display: "block", marginBottom: "1.4rem" }}>
            <LogoMark height={22} />
          </Link>

          <p className="footer-brand-desc">
            Exquisite leather handbags,
            <br />designed in London.
            <br />Crafted in Italy for legacy.
          </p>

          <div className="footer-location">
            <div className="footer-location-dot" />
            <span>Maison ZIRUVA — London, UK</span>
          </div>

          {/* Currently Crafting */}
          <div className="footer-crafting">
            <p className="footer-crafting-label">Currently crafting</p>
            <Link href="/product/la-lune" style={{ textDecoration: "none" }}>
              <div className="footer-crafting-card">
                <div className="footer-crafting-thumb">
                  <Image
                    src="/images/la-lune-attached.jpg"
                    alt="La Lune — L'Édition"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="footer-crafting-name">La Lune</p>
                  <p className="footer-crafting-tier">L&apos;Édition · Limited</p>
                </div>
                <svg className="footer-crafting-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`ZIRUVA on ${s.label}`}
                className="footer-social-link"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Nav columns */}
        <div className="footer-nav-grid">
          {nav.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.07 * (i + 1) }}
            >
              <h3 className="footer-nav-heading">{col.heading}</h3>
              <ul className="footer-nav-list">
                {col.links.map((lk) => (
                  <li key={lk.label}>
                    <Link href={lk.href} className="footer-nav-link">
                      {lk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-bottom-copy">
            © {YEAR} Maison ZIRUVA. All rights reserved.
          </p>
          <div className="footer-bottom-badges">
            <span>Designed in London</span>
            <span className="footer-bottom-dot">·</span>
            <span>Crafted in Italy</span>
            <span className="footer-bottom-dot">·</span>
            <a href="mailto:ziruva.co@gmail.com" className="footer-bottom-email">
              ziruva.co@gmail.com
            </a>
          </div>
        </div>
      </div>


      <style>{`
        .ziruva-footer {
          background: var(--text-primary);
          position: relative;
          overflow: hidden;
          contain: paint;
        }

        /* ─── Gold line ─── */
        .footer-gold-line {
          height: 1px;
          background: linear-gradient(to right, transparent 0%, var(--gold) 30%, var(--accent-brown) 60%, transparent 100%);
          opacity: 0.35;
        }

        /* ─── Newsletter strip ─── */
        .footer-newsletter {
          border-bottom: 1px solid rgba(252,248,240,0.07);
          padding: 3rem 4rem;
        }
        .footer-newsletter-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-newsletter-eyebrow {
          font-family: var(--font-fashion);
          font-size: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--accent-brown);
          margin-bottom: 0.5rem;
        }
        .footer-newsletter-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 300;
          color: rgba(252,248,240,0.85);
          line-height: 1.1;
        }
        .footer-newsletter-copy {
          flex-shrink: 0;
        }

        /* ─── Main grid ─── */
        .footer-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 4rem 4.5rem;
          display: grid;
          grid-template-columns: 1.3fr 2.4fr;
          gap: 4rem;
        }

        /* ─── Brand column ─── */
        .footer-brand-desc {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(252,248,240,0.32);
          margin-bottom: 1.4rem;
        }
        .footer-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .footer-location-dot {
          width: 5px;
          height: 5px;
          background: var(--accent-brown);
          border-radius: 50%;
          opacity: 0.7;
          flex-shrink: 0;
        }
        .footer-location span {
          font-family: var(--font-fashion);
          font-size: 0.46rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(252,248,240,0.28);
        }

        /* Currently Crafting */
        .footer-crafting {
          border-top: 1px solid rgba(252,248,240,0.07);
          padding-top: 1.4rem;
          margin-bottom: 2rem;
        }
        .footer-crafting-label {
          font-family: var(--font-fashion);
          font-size: 0.42rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(252,248,240,0.2);
          margin-bottom: 0.8rem;
        }
        .footer-crafting-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .footer-crafting-card:hover .footer-crafting-name {
          color: var(--accent-brown) !important;
        }
        .footer-crafting-thumb {
          position: relative;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 3px;
          overflow: hidden;
        }
        .footer-crafting-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(252,248,240,0.55);
          margin-bottom: 0.15rem;
          transition: color 0.3s ease;
        }
        .footer-crafting-tier {
          font-family: var(--font-fashion);
          font-size: 0.4rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(252,248,240,0.28);
        }
        .footer-crafting-arrow {
          margin-left: auto;
          color: rgba(252,248,240,0.2);
          flex-shrink: 0;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .footer-crafting-card:hover .footer-crafting-arrow {
          color: var(--accent-brown);
          transform: translateX(3px);
        }

        /* Socials */
        .footer-socials {
          display: flex;
          gap: 1.6rem;
          flex-wrap: wrap;
        }
        .footer-social-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: rgba(252,248,240,0.28);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-social-link:hover {
          color: var(--accent-brown);
        }
        .footer-social-link span {
          font-family: var(--font-fashion);
          font-size: 0.5rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        /* ─── Nav columns ─── */
        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .footer-nav-heading {
          font-family: var(--font-fashion);
          font-size: 0.52rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(252,248,240,0.32);
          margin-bottom: 1.4rem;
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-nav-link {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(252,248,240,0.48);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.3s ease;
          position: relative;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-brown);
          transition: width 0.3s ease;
        }
        .footer-nav-link:hover {
          color: rgba(252,248,240,0.9);
        }
        .footer-nav-link:hover::after {
          width: 100%;
        }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          border-top: 1px solid rgba(252,248,240,0.07);
          position: relative;
          z-index: 2;
        }
        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.4rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-bottom-copy {
          font-family: var(--font-sans);
          font-size: 0.56rem;
          letter-spacing: 0.18em;
          color: rgba(252,248,240,0.18);
        }
        .footer-bottom-badges {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-sans);
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          color: rgba(252,248,240,0.18);
          flex-wrap: wrap;
        }
        .footer-bottom-dot {
          opacity: 0.4;
        }
        .footer-bottom-email {
          color: rgba(252,248,240,0.22);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-bottom-email:hover {
          color: var(--accent-brown);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .footer-newsletter { padding: 2.5rem 2.5rem; }
          .footer-main { padding: 3.5rem 2.5rem 4rem; gap: 3rem; }
          .footer-nav-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem 2.5rem; }
          .footer-bottom-inner { padding: 1.3rem 2.5rem; }
        }

        @media (max-width: 768px) {
          .footer-newsletter { padding: 2.2rem 1.5rem; }
          .footer-newsletter-inner { flex-direction: column; align-items: flex-start; gap: 1.4rem; }
          .footer-newsletter-headline { font-size: 1.8rem; }
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 2.5rem 1.5rem 3rem;
          }
          .footer-nav-grid { grid-template-columns: 1fr 1fr; gap: 2rem 1.5rem; }
          .footer-bottom-inner {
            padding: 1.2rem 1.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
          }
          .footer-bottom-badges { flex-wrap: wrap; }
          .footer-watermark { opacity: 0.018; }
        }

        @media (max-width: 420px) {
          .footer-newsletter-headline { font-size: 1.5rem; }
          .footer-nav-grid { grid-template-columns: 1fr 1fr; gap: 1.8rem 1rem; }
          .footer-nav-link { font-size: 0.76rem; }
          .footer-socials { gap: 1.2rem; }
        }
      `}</style>
    </footer>
  );
}
