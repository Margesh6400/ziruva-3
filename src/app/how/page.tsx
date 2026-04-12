"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function HowPage() {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── ATELIER HERO ── */}
      <section style={{ 
        paddingTop: "180px", 
        paddingBottom: "100px",
        borderBottom: "1px solid rgba(43,43,43,0.08)"
      }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "flex-end" }}>
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.span variants={fadeUp} style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.6rem", 
                letterSpacing: "0.4em", 
                color: "var(--accent-brown)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem"
              }}>
                Technical Archive — No. 004
              </motion.span>
              <motion.h1 variants={fadeUp} style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)", 
                fontWeight: 300, 
                lineHeight: 0.9,
                color: "var(--text-primary)",
                marginBottom: "3rem"
              }}>
                The Art <br />
                of the <br />
                Process.
              </motion.h1>
              <motion.p variants={fadeUp} style={{ 
                fontFamily: "var(--font-sans)", 
                fontSize: "0.95rem", 
                fontWeight: 300, 
                lineHeight: 1.8, 
                color: "var(--text-secondary)",
                maxWidth: "420px"
              }}>
                Every ZIRUVA silhouette is a quiet confrontation between tradition and modernity. 
                Discover the 128-step journey from raw material to architectural form.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}
            >
              <Image
                src="/images/story-editorial.png"
                alt="ZIRUVA London atelier — the 128-step process of crafting a luxury leather handbag, from design sketch to finished silhouette"
                fill
                style={{ objectFit: "cover", filter: "grayscale(10%)" }}
                priority
              />
              <div style={{
                position: "absolute",
                bottom: "2rem",
                right: "-1rem",
                background: "var(--text-primary)",
                color: "var(--cream)",
                padding: "0.8rem 1.5rem",
                fontFamily: "var(--font-fashion)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                zIndex: 10
              }}>
                STUDIO LDN — 2024
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 01: SOURCING ── */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1.2fr 1fr", 
            gap: "8rem", 
            alignItems: "center" 
          }}>
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div style={{ position: "relative", aspectRatio: "1/1.2", overflow: "hidden" }}>
                  <Image src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800" alt="Grade A full-grain Italian leather hide — ZIRUVA sources only the finest Tuscan calf leather, selected for natural character and durability" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ position: "relative", aspectRatio: "1/1.2", overflow: "hidden", marginTop: "4rem" }}>
                  <Image src="https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800" alt="Traditional leather tooling and cutting — ZIRUVA artisans use the Trincietto blade with 0.5mm precision edge for each leather panel" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              <div style={{
                position: "absolute",
                top: "50%",
                left: "-2rem",
                writingMode: "vertical-rl",
                transform: "rotate(180deg) translateY(50%)",
                fontFamily: "var(--font-fashion)",
                fontSize: "0.55rem",
                letterSpacing: "0.4em",
                color: "var(--text-meta)"
              }}>
                GRADE A FULL-GRAIN — ORIGIN: ITALY
              </div>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeUp} style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--accent-brown)", display: "block", marginBottom: "1rem" }}>01 / THE MATERIAL</motion.span>
              <motion.h2 variants={fadeUp} style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "3.5rem", 
                fontWeight: 300, 
                lineHeight: 1.1,
                marginBottom: "2.5rem"
              }}>
                The Texture <br />
                of Time.
              </motion.h2>
              <motion.p variants={fadeUp} style={{ 
                fontFamily: "var(--font-sans)", 
                fontSize: "0.9rem", 
                lineHeight: 1.8, 
                color: "var(--text-secondary)",
                marginBottom: "2rem" 
              }}>
                We source only the finest full-grain skins from the Tuscan region, selected for their natural character and ability to age with grace. Each hide is inspected under natural light for ten distinct quality markers before cutting.
              </motion.p>
              <motion.div variants={fadeUp} style={{ borderTop: "1px solid rgba(43,43,43,0.1)", paddingTop: "2rem" }}>
                <div style={{ display: "flex", gap: "3rem" }}>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", color: "var(--text-meta)", marginBottom: "0.5rem" }}>WEIGHT</h4>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500 }}>3.2mm Average</p>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", color: "var(--text-meta)", marginBottom: "0.5rem" }}>FINISH</h4>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500 }}>Semi-Aniline</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 02: THE STUDIO ── */}
      <section style={{ padding: "100px 0", background: "var(--text-primary)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.3em", color: "rgba(252,248,240,0.4)" }}>02 / THE STUDIO</span>
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "4rem", 
              fontWeight: 300, 
              color: "var(--cream)",
              marginTop: "1.5rem"
            }}>Architectural Intent.</h2>
          </div>
          
          <div style={{ position: "relative", width: "100%", aspectRatio: "21/9", overflow: "hidden" }}>
             <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" alt="ZIRUVA London design studio — architects of luxury leather silhouettes, modelling each bag in traditional paper card before cutting leather" fill style={{ objectFit: "cover", opacity: 0.7 }} />
             <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "var(--cream)", padding: "4rem", maxWidth: "500px", border: "1px solid rgba(0,0,0,0.1)" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-primary)" }}>
                    In our London archive, every silhouette is modeled in traditional paper card before a single piece of leather is touched. We obsess over the mathematics of the fold and the gravity of the strap.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: THE CRAFT ── */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem" }}>
            {[
              {
                step: "01",
                title: "Precision Cut",
                desc: "Using the traditional 'Trincietto' blade, we cut each panel with a 0.5mm tolerance edge.",
                img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800",
                alt: "ZIRUVA artisan precision-cutting full-grain leather panels using traditional Trincietto blade — 0.5mm tolerance craftsmanship for luxury handbags",
              },
              {
                step: "02",
                title: "Hand Stitch",
                desc: "Eight stitches per inch, using two needles and a single length of waxed linen cord.",
                img: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?q=80&w=800",
                alt: "ZIRUVA master artisan hand-stitching a luxury leather handbag — eight stitches per inch using waxed linen cord and traditional double-needle technique",
              },
              {
                step: "03",
                title: "Burnish",
                desc: "Edges are triple-painted and heat-sealed for a permanent, glass-like finish.",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
                alt: "ZIRUVA leather edge burnishing — triple-painted and heat-sealed edges for a permanent glass-like finish on luxury leather handbags",
              }
            ].map((item, idx) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ position: "relative" }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", marginBottom: "2.5rem", overflow: "hidden" }}>
                  <Image src={item.img} alt={item.alt} fill style={{ objectFit: "cover" }} />
                  <div style={{ 
                    position: "absolute", 
                    top: "1.5rem", 
                    left: "1.5rem", 
                    fontFamily: "var(--font-fashion)",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: 300,
                    opacity: 0.8
                  }}>
                    {item.step}
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-fashion)", fontSize: "0.6rem", letterSpacing: "0.3em", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL: BUILT FOR GENERATIONS ── */}
      <section style={{ padding: "100px 0", borderTop: "1px solid rgba(43,43,43,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, marginBottom: "2rem" }}>A Lifetime in the Half-Stitch.</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "3rem" }}>
            The ZIRUVA promise is simple: structural integrity. We don't just build bags; we create future heirlooms that age with you, gaining character with every journey.
          </p>
          <a href="/#collection" className="btn-primary" style={{ display: "inline-flex" }}>
             <span>Shop the Atelier</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
