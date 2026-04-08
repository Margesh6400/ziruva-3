"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
    };

    const animate = () => {
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        ringRef.current?.style.setProperty("width", "56px");
        ringRef.current?.style.setProperty("height", "56px");
        ringRef.current?.style.setProperty(
          "border-color",
          "rgba(139,107,78,0.9)"
        );
      } else {
        ringRef.current?.style.setProperty("width", "32px");
        ringRef.current?.style.setProperty("height", "32px");
        ringRef.current?.style.setProperty(
          "border-color",
          "rgba(139,107,78,0.5)"
        );
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
    </>
  );
}
