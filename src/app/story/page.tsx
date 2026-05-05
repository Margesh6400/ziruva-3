"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useMediaQuery";

const EASE = [0.25, 0.46, 0.45, 0.94];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function StoryPage() {
  const isMobile = useIsMobile();

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      {isMobile ? <MobileStory /> : <DesktopStory />}
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────────
   MOBILE STORY VIEW
───────────────────────────────────────────── */

function MobileStory() {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      {/* ── HERO ── */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px" }}>
        <div style={{ padding: "0 1.5rem" }}>
          <motion.span variants={fadeUp} style={{ 
            fontFamily: "var(--font-fashion)", 
            fontSize: "0.45rem", 
            letterSpacing: "0.35em", 
            color: "var(--accent-brown)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "1.5rem"
          }}>
            Maison Philosophy — No. 001
          </motion.span>
          <motion.h1 variants={fadeUp} style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "3.5rem", 
            fontWeight: 300, 
            lineHeight: 1,
            color: "var(--text-primary)",
            marginBottom: "2.5rem"
          }}>
            A Study <br />
            in Quiet <br />
            Intent.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: EASE as any }}
            style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: "0.1rem", marginBottom: "3rem" }}
          >
            <Image
              src="/images/story-editorial.png"
              alt="Maison ZIRUVA Editorial"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <motion.p variants={fadeUp} style={{ 
            fontFamily: "var(--font-sans)", 
            fontSize: "0.85rem", 
            lineHeight: 1.8, 
            color: "var(--text-secondary)",
            marginBottom: "2rem"
          }}>
            ZIRUVA was born in London as a quiet confrontation between architectural form and the organic warmth of Tuscan leather. We believe in objects that don't shout, but speak clearly through the precision of their construction.
          </motion.p>
        </div>
      </section>

      {/* ── CHAPTER 01 ── */}
      <section style={{ padding: "60px 0", borderTop: "1px solid rgba(43,43,43,0.06)" }}>
        <div style={{ padding: "0 1.5rem" }}>
          <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.45rem", letterSpacing: "0.3em", color: "var(--accent-brown)", display: "block", marginBottom: "1rem" }}>CHAPTER 01</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, marginBottom: "2rem" }}>The Architecture of the Fold.</h2>
          <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", marginBottom: "2rem" }}>
            <Image src="https://images.unsplash.com/photo-1539109132304-351ed7963d3b?q=80&w=800" alt="Leather fold detail" fill style={{ objectFit: "cover", filter: "sepia(20%)" }} />
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
            Our founder's background in structural engineering informs every silhouette. We don't just design bags; we calculate the gravity of the strap and the mathematics of the fold. Each piece is modeled in paper card for weeks before the first cut of leather is made.
          </p>
        </div>
      </section>

      {/* ── CHAPTER 02 ── */}
      <section style={{ padding: "60px 0", background: "var(--text-primary)", color: "var(--cream)" }}>
        <div style={{ padding: "0 1.5rem" }}>
          <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.45rem", letterSpacing: "0.3em", color: "rgba(252,248,240,0.5)", display: "block", marginBottom: "1rem" }}>CHAPTER 02</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, marginBottom: "2rem" }}>The Philosophy of Silence.</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(252,248,240,0.7)", marginBottom: "3rem" }}>
            In a world of constant noise, ZIRUVA chooses restraint. Our hardware is hidden, our branding is internal, and our luxury is felt rather than seen. It is the weight of the solid brass and the grain of the semi-aniline hide that tells our story.
          </p>
          <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", border: "1px solid rgba(252,248,240,0.1)" }}>
            <Image src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800" alt="Minimalist leather detail" fill style={{ objectFit: "cover", opacity: 0.8 }} />
          </div>
        </div>
      </section>

      {/* ── CHAPTER 03 ── */}
      <section style={{ padding: "60px 1.5rem" }}>
        <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.45rem", letterSpacing: "0.3em", color: "var(--accent-brown)", display: "block", marginBottom: "1rem" }}>CHAPTER 03</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, marginBottom: "2rem" }}>Built for Generations.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "2rem" }}>
          The ZIRUVA promise is simple: structural integrity. We source only Grade A full-grain skins from the Tuscan region, selected for their ability to age with grace. A ZIRUVA piece is not a purchase for a season, but a companion for a lifetime.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ position: "relative", aspectRatio: "1/1.2", overflow: "hidden" }}>
             <Image src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800" alt="Tuscan hide" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "relative", aspectRatio: "1/1.2", overflow: "hidden", marginTop: "1.5rem" }}>
             <Image src="/images/story-detail.png" alt="Workshop detail" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "80px 1.5rem", textAlign: "center", borderTop: "1px solid rgba(43,43,43,0.06)" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 300, marginBottom: "1.5rem" }}>Enter the Archive.</h2>
        <Link href="/collection" className="btn-primary" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
           <span>Shop the Collection</span>
        </Link>
      </section>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DESKTOP STORY VIEW
───────────────────────────────────────────── */

function DesktopStory() {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer}>
      {/* ── HERO ── */}
      <section style={{ paddingTop: "200px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8rem", alignItems: "flex-start" }}>
            <div>
              <motion.span variants={fadeUp} style={{ 
                fontFamily: "var(--font-fashion)", 
                fontSize: "0.6rem", 
                letterSpacing: "0.4em", 
                color: "var(--accent-brown)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "2rem"
              }}>
                Maison Philosophy — No. 001
              </motion.span>
              <motion.h1 variants={fadeUp} style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: "clamp(4rem, 8vw, 7rem)", 
                fontWeight: 300, 
                lineHeight: 0.9,
                color: "var(--text-primary)",
                marginBottom: "4rem"
              }}>
                A Study <br />
                in Quiet <br />
                Intent.
              </motion.h1>
              <motion.p variants={fadeUp} style={{ 
                fontFamily: "var(--font-sans)", 
                fontSize: "1rem", 
                fontWeight: 300, 
                lineHeight: 1.8, 
                color: "var(--text-secondary)",
                maxWidth: "480px"
              }}>
                ZIRUVA was born in London as a quiet confrontation between architectural form and the organic warmth of Tuscan leather. We believe in objects that don't shout, but speak clearly through the precision of their construction.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: EASE as any }}
              style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", borderRadius: "0.1rem" }}
            >
              <Image
                src="/images/story-editorial.png"
                alt="ZIRUVA Editorial"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 01: ORIGIN ── */}
      <section style={{ padding: "140px 0", borderTop: "1px solid rgba(43,43,43,0.06)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "10rem", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1539109132304-351ed7963d3b?q=80&w=1200" alt="Origin" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--accent-brown)", display: "block", marginBottom: "1.5rem" }}>CHAPTER 01</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", fontWeight: 300, lineHeight: 1.1, marginBottom: "3rem" }}>
                The Architecture <br /> of the Fold.
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "520px" }}>
                Our founder's background in structural engineering informs every silhouette. We don't just design bags; we calculate the gravity of the strap and the mathematics of the fold. Each piece is modeled in paper card for weeks before the first cut of leather is made, ensuring that form always follows an internal logic of strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 02: PHILOSOPHY ── */}
      <section style={{ padding: "140px 0", background: "var(--text-primary)", color: "var(--cream)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "100px" }}>
            <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.3em", color: "rgba(252,248,240,0.4)" }}>CHAPTER 02</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4.5rem", fontWeight: 300, marginTop: "2rem" }}>The Philosophy of Silence.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8rem", alignItems: "center" }}>
             <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(252,248,240,0.8)" }}>
                In a world of constant noise, ZIRUVA chooses restraint. Our hardware is hidden, our branding is internal, and our luxury is felt rather than seen. We believe that true elegance is found in the things you don't notice at first — the weight of the solid brass, the consistency of the hand-stitch, and the depth of the semi-aniline hide.
             </p>
             <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid rgba(252,248,240,0.1)" }}>
                <Image src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200" alt="Minimalist luxury" fill style={{ objectFit: "cover", opacity: 0.9 }} />
             </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTER 03: HERITAGE ── */}
      <section style={{ padding: "140px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10rem", alignItems: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                 <div style={{ position: "relative", aspectRatio: "1/1.5", overflow: "hidden" }}>
                    <Image src="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800" alt="Tuscan hide" fill style={{ objectFit: "cover" }} />
                 </div>
                 <div style={{ position: "relative", aspectRatio: "1/1.5", overflow: "hidden", marginTop: "5rem" }}>
                    <Image src="/images/story-detail.png" alt="Workshop detail" fill style={{ objectFit: "cover" }} />
                 </div>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-fashion)", fontSize: "0.5rem", letterSpacing: "0.3em", color: "var(--accent-brown)", display: "block", marginBottom: "1.5rem" }}>CHAPTER 03</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", fontWeight: 300, lineHeight: 1.1, marginBottom: "3rem" }}>Built for Generations.</h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "2rem" }}>
                  The ZIRUVA promise is simple: structural integrity. We source only Grade A full-grain skins from the Tuscan region, selected for their natural character and ability to age with grace. 
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  Each bag is an architectural statement, finished by hand in our London studio. A ZIRUVA piece is not a purchase for a season, but a companion for a lifetime, gaining a unique patina and character with every journey.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "120px 0", borderTop: "1px solid rgba(43,43,43,0.06)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", fontWeight: 300, marginBottom: "3rem" }}>Enter the Archive.</h2>
        <Link href="/collection" className="btn-primary" style={{ display: "inline-flex" }}>
           <span>Shop the Collection</span>
        </Link>
      </section>
    </motion.div>
  );
}
