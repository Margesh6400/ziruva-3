"use client";

import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollTransition from "@/components/ScrollTransition";
import FeaturedCollection from "@/components/FeaturedCollection";
import StorySection from "@/components/StorySection";
import Manifesto from "@/components/Manifesto";
import HorizontalScroll from "@/components/HorizontalScroll";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Lenis from "lenis";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <main style={{ cursor: "none", visibility: isLoading ? "hidden" : "visible" }}>
        <CustomCursor />
        <Navbar />
        <Hero />
        <ScrollTransition />
        <FeaturedCollection />
        <StorySection />
        <Manifesto />
        <HorizontalScroll />
        <Features />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
