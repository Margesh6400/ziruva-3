"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { id: 1, name: "La Signature Ivoire", sub: "Ivory · Teal Handles", price: "£ 240", image: "/images/bag-ivory-teal.png" },
  { id: 2, name: "L'Édition Noire", sub: "Ivory · Black Structure", price: "£ 420", image: "/images/bag-ivory-black.png" },
  { id: 3, name: "La Croco Fauve", sub: "Dark Brown · Crocodile", price: "£ 480", image: "/images/bag-brown-croc.png" },
  { id: 4, name: "La Signature Rose", sub: "Classic · Limited Run", price: "£ 260", image: "/images/bag-ivory-teal.png" },
];

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY * 1.5;
  }, []);

  return (
    <section style={{ background: "var(--cream)", padding: "7rem 0" }}>
      {/* Header */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem", marginBottom: "3.5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
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
              fontFamily: "'Montserrat', sans-serif",
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
                background: "var(--surface)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                position: "relative",
                transition: "box-shadow 0.4s ease",
              }}
            >
              {/* Image area */}
              <div
                style={{
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2.5rem 2rem 1rem",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ position: "relative", width: "200px", height: "200px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="200px"
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.16))",
                    }}
                  />
                </motion.div>
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
                    fontFamily: "'Montserrat', sans-serif",
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "var(--accent-brown)",
                    }}
                  >
                    {item.price}
                  </p>
                  <button
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
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
