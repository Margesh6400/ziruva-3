"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function formatCard(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  return digits;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  border: "1px solid rgba(43,43,43,0.2)",
  background: "transparent",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "var(--text-primary)",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-fashion)",
  fontSize: "0.48rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--text-meta)",
  display: "block",
  marginBottom: "0.5rem",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.5rem",
  fontWeight: 300,
  color: "var(--text-primary)",
  marginBottom: "1.5rem",
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "United Kingdom",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber] = useState(() =>
    "ZR-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const shipping = 0;
  const grandTotal = total + shipping;

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  function validate() {
    const required = [
      "firstName", "lastName", "email", "address1", "city", "postcode",
      "cardName", "cardNumber", "expiry", "cvv",
    ];
    const newErrors: Record<string, string> = {};
    required.forEach((f) => {
      if (!form[f as keyof typeof form].trim()) newErrors[f] = "Required";
    });
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (form.cardNumber.replace(/\s/g, "").length < 16) newErrors.cardNumber = "Invalid card";
    if (form.expiry.length < 5) newErrors.expiry = "Invalid";
    if (form.cvv.length < 3) newErrors.cvv = "Invalid";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8rem 2rem 4rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ textAlign: "center", maxWidth: "480px" }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "1px solid rgba(43,43,43,0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M4 11L9 16L18 7"
                  stroke="var(--accent-brown)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.5rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--accent-brown)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Order Confirmed
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 300,
                color: "var(--text-primary)",
                marginBottom: "1.2rem",
                lineHeight: 1.15,
              }}
            >
              Thank you,<br />{form.firstName}.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Your order has been received and will be dispatched within 1–2 working days.
              A confirmation has been sent to <strong>{form.email}</strong>.
            </p>
            <p
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.5rem",
                letterSpacing: "0.2em",
                color: "var(--text-meta)",
                textTransform: "uppercase",
                marginBottom: "3rem",
              }}
            >
              Order Reference: {orderNumber}
            </p>
            <Link
              href="/collection"
              style={{
                fontFamily: "var(--font-fashion)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--text-primary)",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Continue Shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8rem 2rem 4rem",
            flexDirection: "column",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--text-secondary)",
            }}
          >
            Your cart is empty.
          </p>
          <Link
            href="/collection"
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent-brown)",
              textDecoration: "none",
            }}
          >
            Browse the Collection →
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <style>{`
        .checkout-input:focus { border-color: var(--text-primary) !important; }
        .checkout-input::placeholder { color: rgba(43,43,43,0.3); }
        .field-error { border-color: #c0392b !important; }
        .error-msg { font-family: var(--font-sans); font-size: 0.72rem; color: #c0392b; margin-top: 0.3rem; display: block; }
      `}</style>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(5rem, 10vw, 9rem) 2rem 5rem",
        }}
      >
        {/* Page title */}
        <div style={{ marginBottom: "3.5rem" }}>
          <Link
            href="/collection"
            style={{
              fontFamily: "var(--font-fashion)",
              fontSize: "0.52rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--text-meta)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M10 5.5H1M1 5.5l3.5-3.5M1 5.5L4.5 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Collection
          </Link>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Checkout
          </h1>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
              gap: "5rem",
              alignItems: "flex-start",
            }}
            className="checkout-grid"
          >
            {/* ── Left: Form ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

              {/* Contact */}
              <section>
                <h2 style={sectionTitleStyle}>Contact</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input
                      className={`checkout-input${errors.firstName ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      placeholder="Marguerite"
                    />
                    {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      className={`checkout-input${errors.lastName ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      placeholder="Laurent"
                    />
                    {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    className={`checkout-input${errors.email ? " field-error" : ""}`}
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="hello@example.com"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
                <div>
                  <label style={labelStyle}>Phone (Optional)</label>
                  <input
                    type="tel"
                    className="checkout-input"
                    style={inputStyle}
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+44 7700 000000"
                  />
                </div>
              </section>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(43,43,43,0.08)" }} />

              {/* Delivery */}
              <section>
                <h2 style={sectionTitleStyle}>Delivery Address</h2>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Address Line 1</label>
                  <input
                    className={`checkout-input${errors.address1 ? " field-error" : ""}`}
                    style={inputStyle}
                    value={form.address1}
                    onChange={(e) => set("address1", e.target.value)}
                    placeholder="12 Mayfair Street"
                  />
                  {errors.address1 && <span className="error-msg">{errors.address1}</span>}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={labelStyle}>Address Line 2 (Optional)</label>
                  <input
                    className="checkout-input"
                    style={inputStyle}
                    value={form.address2}
                    onChange={(e) => set("address2", e.target.value)}
                    placeholder="Apartment, suite, etc."
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={labelStyle}>City</label>
                    <input
                      className={`checkout-input${errors.city ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.city}
                      onChange={(e) => set("city", e.target.value)}
                      placeholder="London"
                    />
                    {errors.city && <span className="error-msg">{errors.city}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Postcode</label>
                    <input
                      className={`checkout-input${errors.postcode ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.postcode}
                      onChange={(e) => set("postcode", e.target.value.toUpperCase())}
                      placeholder="W1K 1AB"
                    />
                    {errors.postcode && <span className="error-msg">{errors.postcode}</span>}
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Country</label>
                  <select
                    className="checkout-input"
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    value={form.country}
                    onChange={(e) => set("country", e.target.value)}
                  >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>UAE</option>
                    <option>Other</option>
                  </select>
                </div>
              </section>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(43,43,43,0.08)" }} />

              {/* Payment */}
              <section>
                <h2 style={sectionTitleStyle}>Payment</h2>

                <div
                  style={{
                    border: "1px solid rgba(43,43,43,0.12)",
                    padding: "1.5rem",
                    marginBottom: "1.5rem",
                    background: "rgba(255,255,255,0.4)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.48rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-meta)",
                      }}
                    >
                      Secure Card Payment
                    </span>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                      {["VISA", "MC", "AMEX"].map((b) => (
                        <span
                          key={b}
                          style={{
                            fontFamily: "var(--font-fashion)",
                            fontSize: "0.38rem",
                            letterSpacing: "0.1em",
                            border: "1px solid rgba(43,43,43,0.15)",
                            padding: "2px 6px",
                            color: "var(--text-meta)",
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Name on Card</label>
                    <input
                      className={`checkout-input${errors.cardName ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.cardName}
                      onChange={(e) => set("cardName", e.target.value)}
                      placeholder="MARGUERITE LAURENT"
                    />
                    {errors.cardName && <span className="error-msg">{errors.cardName}</span>}
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={labelStyle}>Card Number</label>
                    <input
                      className={`checkout-input${errors.cardNumber ? " field-error" : ""}`}
                      style={inputStyle}
                      value={form.cardNumber}
                      onChange={(e) => set("cardNumber", formatCard(e.target.value))}
                      placeholder="0000 0000 0000 0000"
                      inputMode="numeric"
                      maxLength={19}
                    />
                    {errors.cardNumber && <span className="error-msg">{errors.cardNumber}</span>}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Expiry Date</label>
                      <input
                        className={`checkout-input${errors.expiry ? " field-error" : ""}`}
                        style={inputStyle}
                        value={form.expiry}
                        onChange={(e) => set("expiry", formatExpiry(e.target.value))}
                        placeholder="MM/YY"
                        inputMode="numeric"
                        maxLength={5}
                      />
                      {errors.expiry && <span className="error-msg">{errors.expiry}</span>}
                    </div>
                    <div>
                      <label style={labelStyle}>CVV</label>
                      <input
                        className={`checkout-input${errors.cvv ? " field-error" : ""}`}
                        style={inputStyle}
                        value={form.cvv}
                        onChange={(e) => set("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                        placeholder="•••"
                        inputMode="numeric"
                        maxLength={4}
                        type="password"
                      />
                      {errors.cvv && <span className="error-msg">{errors.cvv}</span>}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "2rem",
                    color: "var(--text-meta)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect x="1" y="5" width="11" height="7" rx="1" stroke="currentColor" strokeWidth="0.9" />
                    <path d="M4 5V3.5a2.5 2.5 0 0 1 5 0V5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-fashion)",
                      fontSize: "0.44rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    256-bit SSL encryption · Your data is never stored
                  </span>
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "var(--text-primary)",
                    color: "var(--cream)",
                    border: "none",
                    padding: "1.2rem",
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Place Order · £ {grandTotal.toFixed(0)}
                </button>
              </section>
            </div>

            {/* ── Right: Order Summary ── */}
            <div style={{ position: "sticky", top: "120px" }}>
              <div
                style={{
                  border: "1px solid rgba(43,43,43,0.1)",
                  padding: "2rem",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    marginBottom: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid rgba(43,43,43,0.08)",
                  }}
                >
                  Order Summary
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {items.map((item) => (
                    <div
                      key={item.key}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        paddingBottom: "1.2rem",
                        marginBottom: "1.2rem",
                        borderBottom: "1px solid rgba(43,43,43,0.06)",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
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
                        {item.qty > 1 && (
                          <span
                            style={{
                              position: "absolute",
                              top: "4px",
                              right: "4px",
                              background: "var(--text-primary)",
                              color: "var(--cream)",
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.65rem",
                              width: "18px",
                              height: "18px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                            }}
                          >
                            {item.qty}
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: "var(--text-primary)",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-fashion)",
                            fontSize: "0.42rem",
                            letterSpacing: "0.12em",
                            color: "var(--text-meta)",
                            textTransform: "uppercase",
                            marginBottom: "0.4rem",
                          }}
                        >
                          {item.colorLabel}
                          {item.scarfQty > 0 &&
                            ` · ${item.scarfQty} Scarf${item.scarfQty > 1 ? "ves" : ""} (+£${item.scarfPrice})`}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.85rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          £ {((item.price + item.scarfPrice) * item.qty).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginTop: "0.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.48rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--text-meta)",
                      }}
                    >
                      Subtotal
                    </span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--text-primary)" }}>
                      £ {total.toFixed(0)}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.48rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--text-meta)",
                      }}
                    >
                      Delivery
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-fashion)",
                        fontSize: "0.48rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--accent-brown)",
                      }}
                    >
                      Complimentary
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(43,43,43,0.1)",
                      marginTop: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        color: "var(--text-primary)",
                      }}
                    >
                      Total
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      £ {grandTotal.toFixed(0)}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-fashion)",
                    fontSize: "0.42rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-meta)",
                    marginTop: "1.2rem",
                    lineHeight: 1.7,
                  }}
                >
                  Free UK delivery · Complimentary gift packaging ·
                  Authenticity certificate included
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .checkout-grid > div:last-child {
            position: static !important;
            order: -1;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}
