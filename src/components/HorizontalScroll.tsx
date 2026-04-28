"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useMediaQuery";

const items = [
  { id: 1, name: "La Signature Ivoire", sub: "Ivory · Teal Handles", price: "£ 240", image: "/images/bag-ivory-teal-new.png", alt: "ZIRUVA La Signature Ivoire — ivory leather handbag with teal handles, £240, SS25 luxury collection" },
  { id: 2, name: "L'Édition Noire", sub: "Ivory · Black Structure", price: "£ 420", image: "/images/bag-ivory-black.png", alt: "ZIRUVA L'Édition Noire — structured ivory and black leather handbag, £420, limited edition" },
  { id: 3, name: "La Croco Fauve", sub: "Dark Brown · Crocodile", price: "£ 480", image: "/images/bag-brown-croc.png", alt: "ZIRUVA La Croco Fauve — dark brown crocodile leather handbag, £480, limited to 30 pieces" },
  { id: 4, name: "La Signature Rose", sub: "Classic · Limited Run", price: "£ 260", image: "/images/bag-ivory-teal-new.png", alt: "ZIRUVA La Signature Rose — classic ivory leather handbag, £260, limited run SS25 collection" },
];

/* ─────────────────────────────────────────────
   MOBILE — native swipe carousel
───────────────────────────────────────────── */
function MobileHorizontalScroll() {
  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "3rem 0 4rem",
        /* no overflow:hidden — it clips the track's paddingLeft */
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: "0 1.5rem", marginBottom: "1.8rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.7rem",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ width: "18px", height: "1px", background: "var(--accent-brown)" }} />
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
            Horizontal Gallery · Explore
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 8vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            Browse the Atelier
          </h2>
          <span
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.44rem",
              letterSpacing: "0.2em",
              color: "var(--text-meta)",
              opacity: 0.7,
              paddingBottom: "0.3rem",
            }}
          >
            Swipe →
          </span>
        </div>
      </motion.div>

      {/* Native-scroll swipe track */}
      <div
        className="hz-mobile-track"
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "0.5rem",
          /* snap respects the left inset */
          scrollPaddingLeft: "1.5rem",
        }}
      >
        {/* Hide scrollbar cross-browser */}
        <style>{`
          .hz-mobile-track::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            style={{
              flexShrink: 0,
              /* Show ~1.15 cards so user knows it scrolls */
              width: "calc(78vw)",
              maxWidth: "300px",
              scrollSnapAlign: "start",
            }}
          >
            {/* Card */}
            <div
              style={{
                background: "var(--cream)",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1px solid rgba(43,43,43,0.08)",
                boxShadow: "0 4px 20px rgba(43,43,43,0.06)",
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "280px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 560px) 85vw, 300px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Bottom scrim */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(14,10,4,0.3) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Watermark */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    opacity: 0.55,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.7rem",
                      fontStyle: "italic",
                      color: "white",
                    }}
                  >
                    Atelier Ziruva
                  </span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1rem 1.25rem 1.3rem" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: "var(--text-primary)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.46rem",
                    fontWeight: 500,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--text-meta)",
                    marginBottom: "0.85rem",
                  }}
                >
                  {item.sub}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--accent-brown)",
                    }}
                  >
                    {item.price}
                  </p>
                  <button
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.5rem",
                      fontWeight: 500,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--cream)",
                      background: "var(--text-primary)",
                      border: "none",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                    }}
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP — original wheel-scroll gallery
───────────────────────────────────────────── */
function DesktopHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY * 1.5;
  }, []);

  return (
    <section style={{ background: "var(--cream)", padding: "7rem 0" }}>
      {/* Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 4rem",
          marginBottom: "3.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Horizontal Gallery · Explore
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
              }}
            >
              Browse the Atelier
            </motion.h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-meta)",
            }}
          >
            ← Drag to explore →
          </p>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingLeft: "max(4rem, calc((100vw - 1280px) / 2 + 4rem))",
          paddingRight: "4rem",
          paddingBottom: "1rem",
          cursor: "grab",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            id={`showcase-item-${item.id}`}
            style={{
              flexShrink: 0,
              width: "320px",
              scrollSnapAlign: "center",
            }}
          >
            <div
              style={{
                background: "var(--cream)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                position: "relative",
                transition: "box-shadow 0.4s ease",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: "360px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="320px"
                    style={{
                      objectFit: "cover",
                      filter: "brightness(0.96)",
                    }}
                  />
                </motion.div>

                {/* Legibility Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 20%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Brand Watermark */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.2rem",
                    right: "1.2rem",
                    zIndex: 2,
                    opacity: 0.5,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                      color: "white",
                    }}
                  >
                    Atelier Ziruva
                  </span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "1.2rem 1.8rem 1.8rem" }}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                  }}
                >
                  {item.sub}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "var(--accent-brown)",
                    }}
                  >
                    {item.price}
                  </p>
                  <button
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--text-primary)",
                      border: "1px solid var(--text-primary)",
                      background: "none",
                      padding: "0.45rem 1rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--text-primary)";
                      e.currentTarget.style.color = "var(--cream)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.color = "var(--text-primary)";
                    }}
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */
export default function HorizontalScroll() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHorizontalScroll /> : <DesktopHorizontalScroll />;
}
