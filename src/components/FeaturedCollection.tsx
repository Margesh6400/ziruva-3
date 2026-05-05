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

  const isLimited = product.tier.toLowerCase().includes("limited");
  const shortMaterial = product.specs.material.includes(" in ")
    ? product.specs.material.split(" in ").slice(-1)[0]
    : product.specs.material.split(",")[0];

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none", display: "block" }}>
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
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(${hovered ? -6 : 0}px)`,
          transition: "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease",
          boxShadow: hovered
            ? "0 36px 72px rgba(43,43,43,0.14), 0 8px 20px rgba(43,43,43,0.06)"
            : "0 4px 24px rgba(43,43,43,0.06)",
        }}
      >
        {/* Tier badge */}
        <div style={{ position: "absolute", top: "1.5rem", left: "1.6rem", zIndex: 10, display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.56rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "white",
              textShadow: "0 1px 8px rgba(0,0,0,0.25)",
            }}
          >
            {product.tier}
          </span>
          {isLimited && (
            <span
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.48rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--accent-brown)",
                padding: "0.15rem 0.55rem",
                borderRadius: "2px",
              }}
            >
              8 left
            </span>
          )}
        </div>

        {/* Image */}
        <div className="card-img-wrap" style={{ position: "relative", paddingTop: "115%", overflow: "hidden" }}>
          <motion.div
            animate={{
              scale: hovered ? 1.07 : 1,
              transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
            }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                filter: hovered ? "brightness(1)" : "brightness(0.97)",
                transition: "filter 0.6s ease",
              }}
            />
            {product.variants && product.variants.length > 1 && (
              <Image
                src={product.variants[1].image}
                alt={product.variants[1].label}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.65s ease",
                }}
              />
            )}
          </motion.div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 28%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "70px",
              background: `linear-gradient(to bottom, transparent 0%, ${product.bg} 100%)`,
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "1.6rem",
              right: "1.4rem",
              zIndex: 4,
              opacity: hovered ? 0.9 : 0.5,
              transition: "opacity 0.4s ease",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.82rem",
                fontStyle: "italic",
                color: "white",
                textShadow: "0 1px 6px rgba(0,0,0,0.18)",
              }}
            >
              Maison Ziruva
            </span>
          </div>
        </div>

        {/* Info — slides up on hover */}
        <div
          style={{
            padding: "1.25rem 1.75rem 1.75rem",
            transform: `translateY(${hovered ? -4 : 0}px)`,
            transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.58rem",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--accent-brown)",
              marginBottom: "0.45rem",
            }}
          >
            {product.collection}
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.65rem",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {product.name}
          </h3>

          {/* Material descriptor */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--text-secondary)",
              opacity: 0.72,
              marginBottom: "0.9rem",
            }}
          >
            {shortMaterial}
          </p>

          <div style={{ height: "1px", background: "rgba(43,43,43,0.1)", marginBottom: "1rem" }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-primary)",
                letterSpacing: "0.02em",
              }}
            >
              {product.price}
            </p>

            <motion.button
              whileHover={{ x: 4 }}
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.56rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                opacity: hovered ? 1 : 0.7,
                transition: "opacity 0.35s ease",
              }}
            >
              Add to Waitlist
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6h10M7 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>

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
      className="collection-section"
      style={{ background: "var(--cream)", padding: "1.5rem 0 8rem" }}
    >
      <div
        className="collection-container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}
      >
        <div className="collection-header collection-header-mb">
          <div className="collection-header-left">
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
                marginBottom: "1.1rem",
              }}
            >
              SS25 · Featured Pieces
            </motion.span>
            <motion.h2
              className="collection-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.8rem, 4.5vw, 4.8rem)",
                fontWeight: 300,
                lineHeight: 1.0,
                color: "var(--text-primary)",
              }}
            >
              The Collection
            </motion.h2>
          </div>

          <div className="collection-header-right">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.84rem",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--text-secondary)",
                maxWidth: "320px",
              }}
            >
              Each design is created in limited quantities. Once a piece sells
              out, it is retired forever — a true collector&apos;s object.
            </motion.p>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
          className="products-grid"
        >
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "4.5rem" }}
        >
          <Link href="/collection" className="btn-secondary" id="view-all-collection">
            View All Pieces
          </Link>
        </motion.div>
      </div>

      <style>{`
        .collection-header {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }
        .collection-header-mb { margin-bottom: 5rem; }
        .collection-header-right { padding-bottom: 0.4rem; }

        @media (max-width: 860px) {
          .collection-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .collection-header-right { padding-bottom: 0; }
          .collection-header-mb { margin-bottom: 3rem !important; }
          .collection-section { padding: 4rem 0 5rem !important; }
          .collection-container { padding: 0 2rem !important; }
          .products-grid { grid-template-columns: 1fr 1fr !important; gap: 1.25rem !important; }
        }

        @media (max-width: 560px) {
          .collection-section { padding: 3rem 0 4rem !important; }
          .collection-container { padding: 0 1.25rem !important; }
          .collection-title { font-size: 2.2rem !important; }
          .collection-header-mb { margin-bottom: 2rem !important; }
          .products-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .card-img-wrap { padding-top: 90% !important; }
        }
      `}</style>
    </section>
  );
}
