"use client";

import { use } from "react";
import { products, Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── PRODUCT HERO ── */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1.2fr", 
            gap: "6rem", 
            alignItems: "flex-start" 
          }}>
            {/* Left Info Column */}
            <motion.div initial="hidden" animate="show" variants={staggerContainer} style={{ position: "sticky", top: "140px" }}>
              <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
                <Link href="/collection" style={{ 
                  fontFamily: "var(--font-fashion)", 
                  fontSize: "0.6rem", 
                  letterSpacing: "0.3em", 
                  textTransform: "uppercase", 
                  color: "var(--text-meta)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11 6H1M1 6l4-4M1 6l4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Collection
                </Link>
              </motion.div>

              <motion.span variants={fadeUp} style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.62rem", 
                letterSpacing: "0.4em", 
                textTransform: "uppercase", 
                color: "var(--accent-brown)",
                display: "block",
                marginBottom: "1.5rem"
              }}>
                {product.tier}
              </motion.span>
              
              <motion.h1 variants={fadeUp} style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
                fontWeight: 300, 
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "2rem"
              }}>
                {product.name}
              </motion.h1>

              <motion.p variants={fadeUp} style={{ 
                fontFamily: "var(--font-sans)", 
                fontSize: "0.95rem", 
                lineHeight: 1.8, 
                color: "var(--text-secondary)",
                marginBottom: "3rem",
                maxWidth: "400px"
              }}>
                {product.narrative}
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "2.5rem", marginBottom: "4rem" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", fontWeight: 400, color: "var(--text-primary)" }}>
                  {product.price}
                </span>
                <button className="btn-primary" style={{ padding: "0.8rem 2.5rem" }}>
                  <span>Add to Waitlist</span>
                </button>
              </motion.div>

              {/* Technical Mini-Dossier */}
              <motion.div variants={fadeUp} style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "2.5rem" }}>
                <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-meta)", marginBottom: "1.5rem" }}>Technical Documentation</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <span style={{ fontSize: "0.5rem", fontFamily: "var(--font-fashion)", color: "var(--text-meta)", display: "block", marginBottom: "0.4rem" }}>SERIAL</span>
                    <span style={{ fontSize: "0.8rem", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>{product.specs.serial}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.5rem", fontFamily: "var(--font-fashion)", color: "var(--text-meta)", display: "block", marginBottom: "0.4rem" }}>ORIGIN</span>
                    <span style={{ fontSize: "0.8rem", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>{product.specs.origin}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Gallery Column */}
            <div style={{ position: "relative" }}>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.2, ease: EASE as any }}
                 style={{ 
                   background: product.bg, 
                   aspectRatio: "3/4", 
                   position: "relative",
                   overflow: "hidden"
                 }}
              >
                <Image src={product.image} alt={product.alt} fill style={{ objectFit: "cover" }} priority />
              </motion.div>
              
              {/* Detail Mesh (Demo Close-ups) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
                <div style={{ position: "relative", aspectRatio: "1/1", background: product.bg, overflow: "hidden" }}>
                  <Image src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800" alt="Detail 1" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                </div>
                <div style={{ position: "relative", aspectRatio: "1/1", background: product.bg, overflow: "hidden" }}>
                   <Image src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800" alt="Detail 2" fill style={{ objectFit: "cover", opacity: 0.8 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE DOSSIER ── */}
      <section style={{ padding: "100px 0", borderTop: "1px solid rgba(43,43,43,0.08)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem" }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>01 / THE MATERIAL</h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {product.specs.material}. Selected for its strength and ability to develop a unique patina over decades of use.
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>02 / HARDWARE</h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {product.specs.hardware}. Custom cast and hand-polished to a mirror finish before architectural assembly.
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>03 / VOLUME</h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {product.specs.dimensions}. Calculated for optimal center-of-gravity when carried, ensuring the silhouette remains constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PIECES ── */}
      <section style={{ padding: "120px 0", background: "white" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, marginBottom: "4rem" }}>Related Archives.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative" }}>
                   <div style={{ background: p.bg, aspectRatio: "1/1", position: "relative", marginBottom: "1.5rem", overflow: "hidden" }}>
                      <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
                   </div>
                   <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--text-primary)" }}>{p.name}</h3>
                   <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--accent-brown)", textTransform: "uppercase" }}>{p.collection}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
