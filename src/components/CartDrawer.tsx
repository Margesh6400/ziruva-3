"use client";

import { useCart } from "@/context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, total, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(20,15,10,0.4)",
              zIndex: 1200,
              backdropFilter: "blur(2px)",
            }}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(480px, 100vw)",
              background: "var(--cream)",
              zIndex: 1201,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "2rem 2rem 1.5rem",
                borderBottom: "1px solid rgba(43,43,43,0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.9rem",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Your Selection
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.48rem",
                    letterSpacing: "0.22em",
                    color: "var(--text-meta)",
                    textTransform: "uppercase",
                  }}
                >
                  {count} {count === 1 ? "Piece" : "Pieces"}
                </span>
              </div>
              <button
                onClick={closeCart}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px",
                  color: "var(--text-secondary)",
                  marginTop: "4px",
                }}
                aria-label="Close cart"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2L14 14M14 2L2 14"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1.5rem 2rem",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(43,43,43,0.1) transparent",
              }}
            >
              {items.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.2rem",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    style={{ opacity: 0.2 }}
                  >
                    <rect
                      x="4"
                      y="11"
                      width="28"
                      height="21"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M12 11V9a6 6 0 0 1 12 0v2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      color: "var(--text-secondary)",
                    }}
                  >
                    Your cart is empty
                  </p>
                  <Link
                    href="/collection"
                    onClick={closeCart}
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.5rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "var(--accent-brown)",
                      textDecoration: "none",
                    }}
                  >
                    Browse Collection →
                  </Link>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {items.map((item) => (
                    <div
                      key={item.key}
                      style={{
                        display: "flex",
                        gap: "1.2rem",
                        padding: "1.4rem 0",
                        borderBottom: "1px solid rgba(43,43,43,0.06)",
                      }}
                    >
                      <div
                        style={{
                          width: "82px",
                          height: "82px",
                          position: "relative",
                          flexShrink: 0,
                          background: "#f0ebe4",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "0.3rem",
                          }}
                        >
                          <h4
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.1rem",
                              fontWeight: 400,
                              color: "var(--text-primary)",
                            }}
                          >
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.key)}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "var(--text-meta)",
                              padding: "2px",
                              flexShrink: 0,
                              marginLeft: "8px",
                            }}
                            aria-label="Remove item"
                          >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                              <path
                                d="M1 1L10 10M10 1L1 10"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

                        <span
                          style={{
                            fontFamily: "var(--font-fashion)",
                            fontSize: "0.44rem",
                            color: "var(--text-meta)",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "0.8rem",
                          }}
                        >
                          {item.colorLabel}
                          {item.scarfQty > 0 &&
                            ` · ${item.scarfQty} Scarf${item.scarfQty > 1 ? "ves" : ""}`}
                        </span>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              border: "1px solid rgba(43,43,43,0.15)",
                            }}
                          >
                            <button
                              onClick={() => setQty(item.key, item.qty - 1)}
                              style={{
                                background: "none",
                                border: "none",
                                padding: "4px 11px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                color: "var(--text-primary)",
                                lineHeight: 1,
                              }}
                            >
                              −
                            </button>
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.8rem",
                                padding: "0 8px",
                                color: "var(--text-primary)",
                                minWidth: "20px",
                                textAlign: "center",
                              }}
                            >
                              {item.qty}
                            </span>
                            <button
                              onClick={() => setQty(item.key, item.qty + 1)}
                              style={{
                                background: "none",
                                border: "none",
                                padding: "4px 11px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                color: "var(--text-primary)",
                                lineHeight: 1,
                              }}
                            >
                              +
                            </button>
                          </div>

                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.9rem",
                              color: "var(--text-primary)",
                            }}
                          >
                            £ {((item.price + item.scarfPrice) * item.qty).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                style={{
                  padding: "1.5rem 2rem 2rem",
                  borderTop: "1px solid rgba(43,43,43,0.08)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.52rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--text-meta)",
                    }}
                  >
                    Subtotal
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.05rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    £ {total.toFixed(0)}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.44rem",
                    letterSpacing: "0.14em",
                    color: "var(--text-meta)",
                    textTransform: "uppercase",
                    marginBottom: "1.2rem",
                  }}
                >
                  Free UK delivery · Complimentary gift packaging
                </p>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  style={{
                    display: "block",
                    background: "var(--text-primary)",
                    color: "var(--cream)",
                    textAlign: "center",
                    padding: "1.1rem",
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    marginBottom: "0.8rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Proceed to Checkout
                </Link>

                <button
                  onClick={closeCart}
                  style={{
                    display: "block",
                    width: "100%",
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.48rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
