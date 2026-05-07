"use client";

import { createContext, useContext, useReducer, useEffect, useState } from "react";

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  colorLabel: string;
  scarfQty: number;
  scarfPrice: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type Action =
  | { type: "ADD"; item: CartItem }
  | { type: "LOAD"; items: CartItem[] }
  | { type: "REMOVE"; key: string }
  | { type: "SET_QTY"; key: string; qty: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.key === action.item.key);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.key === action.item.key ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, isOpen: true, items: [...state.items, action.item] };
    }
    case "LOAD":
      return { ...state, items: action.items };
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case "SET_QTY":
      if (action.qty < 1)
        return { ...state, items: state.items.filter((i) => i.key !== action.key) };
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, qty: action.qty } : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ziruva-cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        if (Array.isArray(parsed)) dispatch({ type: "LOAD", items: parsed });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("ziruva-cart", JSON.stringify(state.items));
    }
  }, [state.items, hydrated]);

  const total = state.items.reduce(
    (sum, i) => sum + (i.price + i.scarfPrice) * i.qty,
    0
  );
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem: (item) => dispatch({ type: "ADD", item }),
        removeItem: (key) => dispatch({ type: "REMOVE", key }),
        setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
        clearCart: () => dispatch({ type: "CLEAR" }),
        openCart: () => dispatch({ type: "OPEN" }),
        closeCart: () => dispatch({ type: "CLOSE" }),
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
