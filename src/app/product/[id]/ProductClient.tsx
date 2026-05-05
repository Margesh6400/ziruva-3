"use client";

import { useState } from "react";
import Script from "next/script";
import { Product, products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useMediaQuery";

const siteUrl = "https://ziruvaofficial.com";

const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE as any } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────────────────────────
   MOBILE PRODUCT VIEW
───────────────────────────────────────────── */

function MobileProduct({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* ── IMAGE GALLERY ── */}
      <section style={{ paddingTop: "70px" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "1/1.2", background: product.bg, overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={activeImage}
                alt={product.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Tier Badge */}
          <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 10 }}>
            <span style={{ 
              fontFamily: "var(--font-fashion)", 
              fontSize: "0.45rem", 
              letterSpacing: "0.3em", 
              textTransform: "uppercase",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              padding: "0.4rem 0.8rem",
              color: "var(--text-primary)",
              borderRadius: "0.1rem"
            }}>
              {product.tier.split(' · ')[0]}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ 
          display: "flex", 
          gap: "0.8rem", 
          padding: "1rem 1.5rem", 
          overflowX: "auto",
          scrollbarWidth: "none"
        }} className="no-scrollbar">
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {[product.image, ...(product.variants?.map(v => v.image) || [])].map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              style={{
                flexShrink: 0,
                width: "60px",
                height: "60px",
                position: "relative",
                border: activeImage === img ? "1px solid var(--text-primary)" : "1px solid transparent",
                padding: "2px",
                background: "none",
                cursor: "pointer"
              }}
            >
              <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
                <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── INFO SECTION ── */}
      <section style={{ padding: "1rem 1.5rem 3rem" }}>
        <motion.div initial="hidden" animate="show" variants={staggerContainer}>
          <motion.div variants={fadeUp} style={{ marginBottom: "0.5rem" }}>
            <span style={{ 
              fontFamily: "var(--font-fashion)", 
              fontSize: "0.5rem", 
              letterSpacing: "0.3em", 
              textTransform: "uppercase",
              color: "var(--accent-brown)" 
            }}>
              {product.collection}
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "2.4rem", 
            fontWeight: 300, 
            color: "var(--text-primary)",
            marginBottom: "1rem",
            lineHeight: 1.1
          }}>
            {product.name}
          </motion.h1>

          <motion.div variants={fadeUp} style={{ marginBottom: "2rem" }}>
            <span style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "1.1rem", 
              color: "var(--text-primary)",
              display: "block",
              marginBottom: "1.5rem"
            }}>
              {product.price}
            </span>
            <button className="btn-primary" style={{ width: "100%", padding: "1.1rem" }}>
              <span>Add to Waitlist</span>
            </button>
          </motion.div>

          <motion.p variants={fadeUp} style={{ 
            fontFamily: "var(--font-sans)", 
            fontSize: "0.9rem", 
            lineHeight: 1.7, 
            color: "var(--text-secondary)",
            marginBottom: "2.5rem"
          }}>
            {product.narrative}
          </motion.p>

          {product.variants && (
            <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
              <span style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.5rem", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase",
                color: "var(--text-meta)",
                display: "block",
                marginBottom: "1rem"
              }}>
                Colourway
              </span>
              <div style={{ display: "flex", gap: "0.8rem" }}>
                {product.variants.map((v) => (
                  <button
                    key={v.color}
                    onClick={() => setActiveImage(v.image)}
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      borderRadius: "50%",
                      background: v.color,
                      border: activeImage === v.image ? "2px solid var(--text-primary)" : "1px solid rgba(0,0,0,0.1)",
                      padding: "2px",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: v.color, border: "2px solid var(--cream)" }} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech Specs */}
          <motion.div variants={fadeUp} style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "2rem", marginBottom: "4rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.45rem", fontFamily: "var(--font-fashion)", color: "var(--text-meta)", display: "block", marginBottom: "0.3rem" }}>SERIAL</span>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>{product.specs.serial}</span>
              </div>
              <div>
                <span style={{ fontSize: "0.45rem", fontFamily: "var(--font-fashion)", color: "var(--text-meta)", display: "block", marginBottom: "0.3rem" }}>ORIGIN</span>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", color: "var(--text-primary)" }}>{product.specs.origin}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── THE DOSSIER (Stacked) ── */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(43,43,43,0.06)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {[
            { id: "01", label: "THE MATERIAL", text: product.specs.material },
            { id: "02", label: "HARDWARE", text: product.specs.hardware },
            { id: "03", label: "VOLUME", text: product.specs.dimensions },
            { id: "04", label: "LINING", text: product.specs.lining },
            { id: "05", label: "STRAP", text: product.specs.strap },
            { id: "06", label: "CLOSURE", text: product.specs.closure },
            { id: "07", label: "INTERIOR", text: product.specs.interior }
          ].map((item) => (
            <div key={item.id}>
              <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.55rem", letterSpacing: "0.2em", marginBottom: "1rem", color: "var(--text-primary)" }}>
                {item.id} / {item.label}
              </h4>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATED (Horizontal Scroll) ── */}
      <section style={{ padding: "5rem 0", background: "white", overflow: "hidden" }}>
        <h2 style={{ 
          fontFamily: "'Cormorant Garamond', serif", 
          fontSize: "2.2rem", 
          fontWeight: 300, 
          marginBottom: "2.5rem", 
          padding: "0 1.5rem" 
        }}>
          Related Archives.
        </h2>
        <div 
          className="no-scrollbar"
          style={{ 
            display: "flex", 
            gap: "1.2rem", 
            overflowX: "auto", 
            padding: "0 1.5rem", 
            scrollSnapType: "x mandatory", 
            scrollPadding: "0 1.5rem",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch"
          }} 
        >
          {relatedProducts.map((p) => (
            <Link 
              key={p.id} 
              href={`/product/${p.id}`} 
              style={{ 
                textDecoration: "none", 
                flexShrink: 0, 
                width: "260px", 
                scrollSnapAlign: "start" 
              }}
            >
              <div style={{ 
                background: p.bg, 
                aspectRatio: "1/1", 
                position: "relative", 
                marginBottom: "1.2rem", 
                overflow: "hidden",
                borderRadius: "0.1rem",
                border: "1px solid rgba(0,0,0,0.03)"
              }}>
                <Image src={p.image} alt={p.alt} fill style={{ objectFit: "cover" }} />
              </div>
              <h3 style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "1.2rem", 
                fontWeight: 400, 
                color: "var(--text-primary)", 
                marginBottom: "0.3rem" 
              }}>
                {p.name}
              </h3>
              <span style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.55rem", 
                letterSpacing: "0.2em", 
                color: "var(--accent-brown)", 
                textTransform: "uppercase" 
              }}>
                {p.collection}
              </span>
            </Link>
          ))}
          {/* Spacer for right side padding */}
          <div style={{ flexShrink: 0, width: "1.5rem", height: "1px" }} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP PRODUCT VIEW
───────────────────────────────────────────── */

function DesktopProduct({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── PRODUCT HERO ── */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "6rem",
              alignItems: "flex-start",
            }}
          >
            {/* Left Info Column */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerContainer}
              style={{ position: "sticky", top: "140px" }}
            >
              <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
                <Link
                  href="/collection"
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--text-meta)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M11 6H1M1 6l4-4M1 6l4 4"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Back to Collection
                </Link>
              </motion.div>

              <motion.span
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-fashion)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "var(--accent-brown)",
                  display: "block",
                  marginBottom: "1.5rem",
                }}
              >
                {product.tier}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  marginBottom: "2rem",
                }}
              >
                {product.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: "3rem",
                  maxWidth: "400px",
                }}
              >
                {product.narrative}
              </motion.p>

              <motion.div
                variants={fadeUp}
                style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "4rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                    }}
                  >
                    {product.price}
                  </span>
                  <button className="btn-primary" style={{ padding: "0.8rem 2.5rem" }}>
                    <span>Add to Waitlist</span>
                  </button>
                </div>

                {product.variants && (
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-meta)",
                        display: "block",
                        marginBottom: "1rem",
                      }}
                    >
                      Select Colorway
                    </span>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      {product.variants.map((v) => (
                        <button
                          key={v.color}
                          onClick={() => setActiveImage(v.image)}
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            background: v.color,
                            border:
                              activeImage === v.image
                                ? "2px solid var(--text-primary)"
                                : "1px solid rgba(0,0,0,0.1)",
                            padding: "2px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: activeImage === v.image ? "scale(1.1)" : "scale(1)",
                          }}
                          title={v.label}
                          aria-label={`Select ${v.label} colourway`}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              background: v.color,
                              border: "2px solid var(--cream)",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Technical Mini-Dossier */}
              <motion.div
                variants={fadeUp}
                style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "2.5rem" }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-meta)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Technical Documentation
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontFamily: "var(--font-fashion)",
                        color: "var(--text-meta)",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      SERIAL
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-sans)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {product.specs.serial}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.5rem",
                        fontFamily: "var(--font-fashion)",
                        color: "var(--text-meta)",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      ORIGIN
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-sans)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {product.specs.origin}
                    </span>
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
                  overflow: "hidden",
                }}
              >
                <Image
                  src={activeImage}
                  alt={product.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </motion.div>

              {/* Detail Mesh (Demo Close-ups) */}
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}
              >
                {product.variants ? (
                  product.variants.map((v, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImage(v.image)}
                      style={{
                        position: "relative",
                        aspectRatio: "1/1",
                        background: product.bg,
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={v.image}
                        alt={`ZIRUVA ${product.name} — ${v.label} colourway. ${product.collection} luxury leather handbag, designed in London`}
                        fill
                        style={{ objectFit: "cover", opacity: activeImage === v.image ? 1 : 0.6 }}
                      />
                    </div>
                  ))
                ) : (
                  <>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1/1",
                        background: product.bg,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800"
                        alt={`ZIRUVA ${product.name} — close-up of ${product.specs.material} leather texture and hand-finished surface detail`}
                        fill
                        style={{ objectFit: "cover", opacity: 0.8 }}
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1/1",
                        background: product.bg,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800"
                        alt={`ZIRUVA ${product.name} — ${product.specs.hardware} hardware detail, handcrafted in ${product.specs.origin}`}
                        fill
                        style={{ objectFit: "cover", opacity: 0.8 }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE DOSSIER ── */}
      <section style={{ padding: "100px 0", borderTop: "1px solid rgba(43,43,43,0.08)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem 6rem" }}>
            {[
              { id: "01", label: "THE MATERIAL", text: product.specs.material },
              { id: "02", label: "HARDWARE", text: product.specs.hardware },
              { id: "03", label: "VOLUME", text: product.specs.dimensions },
              { id: "04", label: "LINING", text: product.specs.lining },
              { id: "05", label: "STRAP", text: product.specs.strap },
              { id: "06", label: "CLOSURE", text: product.specs.closure },
              { id: "07", label: "INTERIOR", text: product.specs.interior }
            ].map((item) => (
              <div key={item.id}>
                <h4
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.id} / {item.label}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PIECES ── */}
      <section style={{ padding: "120px 0", background: "white" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.5rem",
              fontWeight: 300,
              marginBottom: "4rem",
            }}
          >
            Related Archives.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      background: p.bg,
                      aspectRatio: "1/1",
                      position: "relative",
                      marginBottom: "1.5rem",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--accent-brown)",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.collection}
                  </span>
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

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function ProductClient({ product }: { product: Product }) {
  const isMobile = useIsMobile();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/product/${product.id}`,
    name: product.name,
    description: product.narrative,
    image: `${siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "ZIRUVA",
      url: siteUrl,
    },
    manufacturer: {
      "@type": "Organization",
      name: "ZIRUVA",
      address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    material: product.specs.material,
    countryOfAssembly: "IT",
    identifier: product.specs.serial,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/LimitedAvailability",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "ZIRUVA",
        url: siteUrl,
        sameAs: ["https://ziruva.co", "https://ziruva.uk", "https://ziruvaofficial.com"],
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "GB" },
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "GBP" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
        },
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ZIRUVA", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Collection", item: `${siteUrl}/collection` },
        { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/product/${product.id}` },
      ],
    },
  };

  return (
    <>
      <Script
        id={`json-ld-product-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {isMobile ? <MobileProduct product={product} /> : <DesktopProduct product={product} />}
    </>
  );
}
