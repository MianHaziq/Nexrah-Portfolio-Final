"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMarqueeScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("#hero");
      const marquee = document.querySelector<HTMLElement>("#marquee");

      if (!hero || !marquee) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        marquee,
        { yPercent: 100 },
        { yPercent: 0, ease: "none" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} />;
}
