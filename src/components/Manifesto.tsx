"use client";

import { motion } from "framer-motion";

const declarations = [
  {
    id: "01",
    label: "PURPOSE",
    title: "Quiet Luxury",
    text: "True elegance does not shout. It is felt in the weight of a handle and the smoothness of a seam.",
  },
  {
    id: "02",
    label: "VISION",
    title: "Modern Heritage",
    text: "We are defining the history of tomorrow. Our designs are built to be heirlooms, not trends.",
  },
  {
    id: "03",
    label: "SCARCITY",
    title: "Deliberate Limits",
    text: "Each collection is a closed chapter. Once a run is complete, the design is permanently retired.",
  },
  {
    id: "04",
    label: "CRAFT",
    title: "Artisanal Devotion",
    text: "Every stitch is a conscious act. We prioritize the patient hands of masters over the speed of machines.",
  },
  {
    id: "05",
    label: "LEGACY",
    title: "Designed for Decades",
    text: "We build for the long scroll. Objects that age with grace and carry the stories of those who hold them.",
  },
  {
    id: "06",
    label: "ORIGIN",
    title: "Ethical Provenance",
    text: "A deep respect for both hide and hand. Sourced with integrity, crafted with unparalleled care.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" style={{ background: "var(--surface)", padding: "1.5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 4rem" }}>
        
        {/* Compact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(43,43,43,0.06)",
            border: "1px solid rgba(43,43,43,0.06)",
          }}
          className="manifesto-grid"
        >
          {declarations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              style={{
                background: "var(--surface)",
                padding: "1.8rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: "160px"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ 
                    fontFamily: "var(--font-fashion)", 
                    fontSize: "0.45rem", 
                    letterSpacing: "0.2em",
                    color: "var(--accent-brown)",
                    fontWeight: 600
                  }}>
                    {item.label}
                  </span>
                  <span style={{ 
                    fontFamily: "var(--font-fashion)", 
                    fontSize: "0.45rem", 
                    color: "rgba(43,43,43,0.25)"
                  }}>
                    {item.id}
                  </span>
                </div>
                
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  marginBottom: "0.6rem",
                  lineHeight: 1.1
                }}>
                  {item.title}
                </h3>
              </div>

              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "var(--text-secondary)",
              }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .manifesto-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .manifesto-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
