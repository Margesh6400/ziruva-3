"use client";

import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollTransition from "@/components/ScrollTransition";
import FeaturedCollection from "@/components/FeaturedCollection";
import StorySection from "@/components/StorySection";
import HorizontalScroll from "@/components/HorizontalScroll";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
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
  }, []);

  return (
    <main style={{ cursor: "none" }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <ScrollTransition />
      <FeaturedCollection />
      <StorySection />
      <HorizontalScroll />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
