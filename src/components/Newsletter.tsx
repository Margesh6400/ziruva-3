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
      {/* Bespoke ZIRUVA watermark logo */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          opacity: 0.025,
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
            <motion.div
              key={`newsletter-watermark-${letter}-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.1 }}
              style={{
                position: "relative",
                height: "clamp(5rem, 18vw, 16rem)",
                width: watermarkWidths[letter],
                marginRight: watermarkMargins[letter]
              }}
            >
              <Image
                src={`/images/logo/${letter}.png`}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          );
        })}
      </div>

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
            marginBottom: "3.5rem",
          }}
        >
          Join the ZIRUVA inner circle for early access to new drops, exclusive
          behind-the-scenes and invitations to private previews.
        </motion.p>

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
              <motion.div
                key="form"
                exit={{ opacity: 0 }}
                style={{ display: "flex" }}
              >
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
                    transition: "border-color 0.3s ease",
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
