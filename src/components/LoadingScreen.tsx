"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const letters = ["z", "i", "r", "u", "v", "a"];

const materialFacts = [
  "Full-grain vegetable-tanned leather",
  "18k gold-plated hardware",
  "Waxed linen hand-stitching",
  "Crafted in Florence, Italy",
];

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
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIdx((p) => (p + 1) % materialFacts.length);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
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
          {/* Logo — clip-path wipe reveal per letter */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {letters.map((letter, idx) => (
              <div
                key={`loading-letter-${letter}-${idx}`}
                style={{
                  position: "relative",
                  height: "clamp(2.5rem, 8vw, 5.5rem)",
                  width: letterWidths[letter],
                  marginRight: letterMargins[letter],
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.0,
                    delay: idx * 0.12 + 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image
                    src={`/images/logo/${letter}.png`}
                    alt=""
                    fill
                    priority
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4, transition: { delay: 1.6, duration: 1.2 } }}
            style={{ marginTop: "2.5rem", textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.55rem",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Maison ZIRUVA — London
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--accent-brown)",
                margin: "0 auto",
                opacity: 0.5,
              }}
            />
          </motion.div>

          {/* Rotating material fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.0, duration: 0.5 } }}
            style={{ marginTop: "1.1rem", height: "1.4em", overflow: "hidden", textAlign: "center" }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={factIdx}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.38 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.62rem",
                  fontWeight: 300,
                  letterSpacing: "0.06em",
                  color: "var(--accent-brown)",
                  fontStyle: "italic",
                }}
              >
                {materialFacts[factIdx]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "var(--accent-brown)",
              originX: 0,
            }}
            initial={{ scaleX: 0, opacity: 0.12 }}
            animate={{ scaleX: 1, opacity: 0.12 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
          {/* Gold pulse at completion */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(to right, transparent 0%, var(--accent-brown) 50%, transparent 100%)",
              originX: 0,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 0, 0.9, 0], scaleX: [0, 1, 1, 1] }}
            transition={{ duration: 2.8, times: [0, 0.82, 0.92, 1], ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
