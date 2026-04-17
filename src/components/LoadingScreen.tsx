"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const letters = ["z", "i", "r", "u", "v", "a"];

const letterWidths: Record<string, string> = {
  z: "clamp(2rem, 6vw, 4rem)",
  i: "clamp(0.4rem, 1.2vw, 0.8rem)",
  r: "clamp(2rem, 6vw, 4rem)",
  u: "clamp(2rem, 6vw, 4rem)",
  v: "clamp(2.2rem, 6.5vw, 4.5rem)",
  a: "clamp(2.2rem, 6.5vw, 4.5rem)",
};

const letterMargins: Record<string, string> = {
  z: "calc(0.4rem + 1vw)",
  i: "calc(0.4rem + 0.8vw)",
  r: "calc(0.4rem + 0.6vw)",
  u: "calc(0.4rem + 0.6vw)",
  v: "calc(0.2rem + 0.2vw)",
  a: "0",
};

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 3200); // 3.2s total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Main Logo Container */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {letters.map((letter, idx) => (
              <motion.div
                key={`loading-letter-${letter}-${idx}`}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 1.4, 
                    delay: idx * 0.15 + 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  } 
                }}
                style={{
                  position: "relative",
                  height: "clamp(2.5rem, 8vw, 5.5rem)",
                  width: letterWidths[letter],
                  marginRight: letterMargins[letter],
                }}
              >
                <Image
                  src={`/images/logo/${letter}.png`}
                  alt=""
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Subtext Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.4,
              transition: { delay: 1.8, duration: 1.5 } 
            }}
            style={{
              marginTop: "2.5rem",
              textAlign: "center"
            }}
          >
            <p style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.55rem",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
              marginBottom: "0.5rem"
            }}>
              Maison ZIRUVA — London
            </p>
            <div style={{
              width: "40px",
              height: "1px",
              background: "var(--accent-brown)",
              margin: "0 auto",
              opacity: 0.5
            }} />
          </motion.div>

          {/* Minimal progress line */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "var(--accent-brown)",
              opacity: 0.1,
              originX: 0
            }}
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { duration: 2.8, ease: "easeInOut" }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
