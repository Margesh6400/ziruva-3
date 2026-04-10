"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// High-fidelity product dataset
import { products as allProducts, Product } from "@/data/products";
import Link from "next/link";

const EASE = [0.25, 0.46, 0.45, 0.94];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE as any } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
};

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        layout={true}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: product.bg,
          borderRadius: "0.2rem",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          transition: "box-shadow 0.6s ease",
          boxShadow: hovered ? "0 40px 80px -12px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.03)"
        }}
      >
        <div style={{ position: "absolute", top: "1rem", left: "1.2rem", zIndex: 10 }}>
          <span style={{ 
            fontFamily: "var(--font-fashion)", 
            fontSize: "0.5rem", 
            fontWeight: 600, 
            letterSpacing: "0.2em", 
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)" 
          }}>
            {product.tier}
          </span>
        </div>

        <div style={{ position: "relative", height: "450px", overflow: "hidden" }}>
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
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
                }}
              />
            )}
          </motion.div>
        </div>

        <div style={{ padding: "1.5rem" }}>
          <p style={{ 
            fontFamily: "var(--font-fashion)", 
            fontSize: "0.55rem", 
            letterSpacing: "0.3em", 
            color: "var(--accent-brown)", 
            textTransform: "uppercase",
            marginBottom: "0.5rem" 
          }}>
            {product.collection}
          </p>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "1.3rem", 
            fontWeight: 400, 
            color: "var(--text-primary)",
            marginBottom: "0.8rem"
          }}>
            {product.name}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--text-secondary)" }}>{product.price}</span>
            <button style={{ 
              fontFamily: "var(--font-fashion)", 
              fontSize: "0.5rem", 
              letterSpacing: "0.15em", 
              background: "none", 
              border: "none", 
              borderBottom: "1px solid var(--text-primary)",
              paddingBottom: "2px",
              cursor: "pointer",
              textTransform: "uppercase"
            }}>
              Details
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function CollectionPage() {
  const [filter, setFilter] = useState("All");
  const filteredProducts = filter === "All" ? allProducts : allProducts.filter(p => p.category === filter);

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.6rem", 
                letterSpacing: "0.5em", 
                textTransform: "uppercase", 
                color: "var(--text-meta)",
                display: "block",
                marginBottom: "1.5rem"
              }}
            >
              Maison ZIRUVA Archives
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE as any }}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "clamp(3rem, 7vw, 6rem)", 
                fontWeight: 300, 
                color: "var(--text-primary)",
                lineHeight: 1
              }}
            >
              The Archives.
            </motion.h1>
          </div>

          {/* Filtering */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "3rem", 
            marginBottom: "5rem",
            borderBottom: "1px solid rgba(43,43,43,0.06)",
            paddingBottom: "1rem"
          }}>
            {["All", "Signature", "Limited"].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: filter === tag ? "var(--text-primary)" : "var(--text-meta)",
                  position: "relative",
                  padding: "0.5rem 0",
                  transition: "color 0.3s ease"
                }}
              >
                {tag}
                {filter === tag && (
                  <motion.div 
                    layoutId="filter-line"
                    style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "1px", background: "var(--text-primary)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", 
              gap: "2.5rem",
              alignItems: "stretch"
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
