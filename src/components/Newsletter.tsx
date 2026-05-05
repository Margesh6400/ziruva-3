"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      style={{
        background: "var(--text-primary)",
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark — slow breathing scale */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.025, 0.04, 0.025] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          userSelect: "none",
          filter: "brightness(0) invert(1)",
        }}
      >
        {["z", "i", "r", "u", "v", "a"].map((letter, idx) => {
          const watermarkWidths: Record<string, string> = {
            z: "clamp(4rem, 15vw, 13rem)",
            i: "clamp(1rem, 3.5vw, 3rem)",
            r: "clamp(4rem, 15vw, 13rem)",
            u: "clamp(4rem, 15vw, 13rem)",
            v: "clamp(4.5rem, 16vw, 14rem)",
            a: "clamp(4.5rem, 16vw, 14rem)",
          };
          const watermarkMargins: Record<string, string> = {
            z: "calc(0.5rem + 2vw)",
            i: "calc(0.5rem + 1.5vw)",
            r: "calc(0.5rem + 1.2vw)",
            u: "calc(0.5rem + 1.2vw)",
            v: "calc(0.2rem + 0.5vw)",
            a: "0",
          };
          return (
            <div
              key={`newsletter-watermark-${letter}-${idx}`}
              style={{
                position: "relative",
                height: "clamp(5rem, 18vw, 16rem)",
                width: watermarkWidths[letter],
                marginRight: watermarkMargins[letter],
              }}
            >
              <Image
                src={`/images/logo/${letter}.png`}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </motion.div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 4rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-fashion)",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "rgba(252,248,240,0.35)",
            display: "block",
            marginBottom: "1.5rem",
          }}
        >
          The Inner Circle
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            fontWeight: 300,
            color: "var(--cream)",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}
        >
          Be First to Know
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.86rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(252,248,240,0.45)",
            marginBottom: "2rem",
          }}
        >
          Join the ZIRUVA inner circle for early access to new drops, exclusive
          behind-the-scenes and invitations to private previews.
        </motion.p>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.85rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex" }}>
            {[
              "#8B6B4E",
              "#A07848",
              "#C9A84C",
              "#6B4F3A",
              "#B08060",
            ].map((color, i) => (
              <div
                key={i}
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: color,
                  border: "2px solid var(--text-primary)",
                  marginLeft: i > 0 ? "-9px" : 0,
                  zIndex: 5 - i,
                  position: "relative",
                }}
              />
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.74rem",
              fontWeight: 300,
              color: "rgba(252,248,240,0.38)",
              letterSpacing: "0.02em",
            }}
          >
            Join{" "}
            <span style={{ color: "rgba(252,248,240,0.65)", fontWeight: 400 }}>2,400+</span>{" "}
            members of the Inner Circle
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          id="newsletter-form"
          style={{ maxWidth: "460px", margin: "0 auto" }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key="form" exit={{ opacity: 0 }} style={{ display: "flex" }}>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    padding: "1.1rem 1.4rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.84rem",
                    fontWeight: 300,
                    background: "rgba(252,248,240,0.06)",
                    border: `1px solid ${focused ? "var(--accent-brown)" : "rgba(252,248,240,0.12)"}`,
                    borderRight: "none",
                    color: "var(--cream)",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: focused ? "0 0 0 3px rgba(201,168,76,0.12)" : "none",
                  }}
                />
                <button
                  type="submit"
                  id="newsletter-submit"
                  style={{
                    padding: "1.1rem 2rem",
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    background: "var(--accent-brown)",
                    color: "var(--cream)",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Join
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: "1.5rem 0" }}
              >
                {/* Animated checkmark */}
                <motion.svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  style={{ display: "block", margin: "0 auto 1.2rem" }}
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="20"
                    stroke="var(--accent-brown)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <motion.path
                    d="M13 22l7 7 11-14"
                    stroke="var(--accent-brown)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  />
                </motion.svg>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Welcome to the Inner Circle
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--accent-brown)",
                  }}
                >
                  You&apos;ll be first to know.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            color: "rgba(252,248,240,0.2)",
            marginTop: "1.8rem",
          }}
        >
          No spam. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
}
