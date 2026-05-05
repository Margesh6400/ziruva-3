"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useMediaQuery";

// High-fidelity product dataset
import { products as allProducts, Product } from "@/data/products";
import Link from "next/link";

const EASE = [0.25, 0.46, 0.45, 0.94];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE as any } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
};

/* ─────────────────────────────────────────────
   SHARED COMPONENTS
───────────────────────────────────────────── */

function ProductCard({ product, isMobile }: { product: Product; isMobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        layout={true}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        style={{
          background: product.bg,
          borderRadius: "0.2rem",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          transition: "box-shadow 0.6s ease",
          boxShadow: hovered ? "0 40px 80px -12px rgba(0,0,0,0.1)" : "0 4px 12px rgba(0,0,0,0.03)",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ position: "absolute", top: isMobile ? "0.6rem" : "1rem", left: isMobile ? "0.8rem" : "1.2rem", zIndex: 10 }}>
          <span style={{ 
            fontFamily: "var(--font-fashion)", 
            fontSize: isMobile ? "0.42rem" : "0.5rem", 
            fontWeight: 600, 
            letterSpacing: "0.2em", 
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)" 
          }}>
            {isMobile ? product.tier.split(' · ')[0] : product.tier}
          </span>
        </div>

        <div style={{ position: "relative", height: isMobile ? "220px" : "450px", overflow: "hidden" }}>
          <motion.div
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes={isMobile ? "50vw" : "(max-width: 768px) 100vw, 33vw"}
              style={{ objectFit: "cover" }}
            />
            {product.variants && product.variants.length > 1 && !isMobile && (
              <Image
                src={product.variants[1].image}
                alt={product.variants[1].label}
                fill
                sizes="33vw"
                style={{
                  objectFit: "cover",
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              />
            )}
          </motion.div>
        </div>

        <div style={{ padding: isMobile ? "0.8rem" : "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <p style={{ 
            fontFamily: "var(--font-fashion)", 
            fontSize: isMobile ? "0.42rem" : "0.55rem", 
            letterSpacing: "0.3em", 
            color: "var(--accent-brown)", 
            textTransform: "uppercase",
            marginBottom: "0.4rem" 
          }}>
            {product.collection}
          </p>
          <h3 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: isMobile ? "0.95rem" : "1.3rem", 
            fontWeight: 400, 
            color: "var(--text-primary)",
            marginBottom: isMobile ? "0.4rem" : "0.8rem",
            lineHeight: 1.2
          }}>
            {product.name}
          </h3>
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: isMobile ? "0.7rem" : "0.85rem", 
              color: "var(--text-secondary)" 
            }}>
              {product.price}
            </span>
            {!isMobile && (
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
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MOBILE VIEW
───────────────────────────────────────────── */

function MobileCollection({ 
  filter, 
  setFilter, 
  products 
}: { 
  filter: string; 
  setFilter: (f: string) => void; 
  products: Product[] 
}) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div style={{ padding: "0 1.25rem" }}>
          
          {/* Header */}
          <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.45rem", 
                letterSpacing: "0.4em", 
                textTransform: "uppercase", 
                color: "var(--text-meta)",
                display: "block",
                marginBottom: "0.8rem"
              }}
            >
              Maison ZIRUVA Archives
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "2.6rem", 
                fontWeight: 300, 
                color: "var(--text-primary)",
                lineHeight: 1.1
              }}
            >
              The Archives.
            </motion.h1>
          </div>

          {/* Filtering - Horizontal Scroll */}
          <div 
            className="no-scrollbar"
            style={{ 
              display: "flex", 
              gap: "1.8rem", 
              marginBottom: "2rem",
              overflowX: "auto",
              scrollbarWidth: "none",
              borderBottom: "1px solid rgba(43,43,43,0.06)",
              paddingBottom: "0.5rem"
            }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {["All", "Signature", "Limited"].map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.52rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: filter === tag ? "var(--text-primary)" : "var(--text-meta)",
                  position: "relative",
                  padding: "0.5rem 0",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease"
                }}
              >
                {tag}
                {filter === tag && (
                  <motion.div 
                    layoutId="filter-line-mobile"
                    style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "1px", background: "var(--text-primary)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid - 2 Columns */}
          <motion.div 
            layout
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "0.75rem",
              alignItems: "stretch"
            }}
          >
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} isMobile={true} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP VIEW
───────────────────────────────────────────── */

function DesktopCollection({ 
  filter, 
  setFilter, 
  products 
}: { 
  filter: string; 
  setFilter: (f: string) => void; 
  products: Product[] 
}) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <style>{`
            @media (max-width: 1024px) {
              .collection-grid-container { padding: 0 2rem !important; }
            }
          `}</style>
          
          <div className="collection-grid-container">
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
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function CollectionPage() {
  const [filter, setFilter] = useState("All");
  const isMobile = useIsMobile();
  
  const filteredProducts = filter === "All" ? allProducts : allProducts.filter(p => p.category === filter);

  if (isMobile) {
    return <MobileCollection filter={filter} setFilter={setFilter} products={filteredProducts} />;
  }

  return <DesktopCollection filter={filter} setFilter={setFilter} products={filteredProducts} />;
}
