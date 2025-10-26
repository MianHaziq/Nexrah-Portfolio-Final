"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeTechScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = document.querySelector<HTMLElement>("#marquee");
      const tech = document.querySelector<HTMLElement>("#technologies");

      if (!marquee || !tech) return;

      // Set up timeline that pins marquee, then brings tech over it
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: marquee,
    start: "top top",
    end: "bottom top", // shorter trigger duration
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

// technologies slides up over marquee
tl.fromTo(
  tech,
  { yPercent: 100 },
  { yPercent: 0, ease: "none" }
);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} />;
}
