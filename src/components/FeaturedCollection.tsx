"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { products, Product } from "@/data/products";
import Link from "next/link";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: index * 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
        id={`product-card-${product.id}`}
        style={{
          background: product.bg,
          borderRadius: "1.25rem",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.4s ease, box-shadow 0.5s ease",
          boxShadow: hovered
            ? "0 32px 64px rgba(43,43,43,0.12)"
            : "0 4px 24px rgba(43,43,43,0.05)",
        }}
      >
      {/* Tier badge */}
      <div style={{ position: "absolute", top: "1.6rem", left: "1.8rem", zIndex: 10 }}>
        <span
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.2)"
          }}
        >
          {product.tier}
        </span>
      </div>

      {/* Image Container */}
      <div
        style={{
          height: "400px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hover-zoom image */}
        <motion.div
          animate={{
            scale: hovered ? 1.1 : 1,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
          }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
              filter: hovered ? "none" : "brightness(0.96)",
              transition: "filter 0.6s ease",
            }}
          />
          {product.variants && product.variants.length > 1 && (
            <Image
              src={product.variants[1].image}
              alt={product.variants[1].label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.6s ease",
                filter: hovered ? "none" : "brightness(0.96)",
              }}
            />
          )}
        </motion.div>

        {/* Top-down gradient for badge legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 25%)",
            pointerEvents: "none",
          }}
        />

        {/* Brand Overlay (Subtle) */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 3,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.4s ease",
          }}
        >
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "white",
            textShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}>
            Maison Ziruva
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1.5rem 2rem 2rem" }}>
        <p
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.6rem",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--accent-brown)",
            marginBottom: "0.5rem",
          }}
        >
          {product.collection}
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "var(--text-primary)",
            marginBottom: "1rem",
          }}
        >
          {product.name}
        </h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              fontWeight: 400,
              color: "var(--text-secondary)",
            }}
          >
            {product.price}
          </p>
          <motion.button
            whileHover={{ x: 4 }}
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.58rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Add to Waitlist
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Bottom reveal bar */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--accent-brown)",
          transformOrigin: "left",
        }}
      />
      </motion.div>
    </Link>
  );
}

export default function FeaturedCollection() {
  return (
    <section
      id="collection"
      style={{ background: "var(--cream)", padding: "7rem 0" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "4.5rem",
          }}
          className="collection-header"
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
              SS25 · Featured Pieces
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--text-primary)",
              }}
            >
              The Collection
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.84rem",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--text-secondary)",
              maxWidth: "360px",
            }}
          >
            Each design is created in limited quantities. Once a piece sells
            out, it is retired forever — a true collector&apos;s object.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="products-grid"
        >
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <Link href="/collection" className="btn-secondary" id="view-all-collection">
            View All Pieces
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
