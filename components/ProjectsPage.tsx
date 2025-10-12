"use client";
import React, { useEffect, useRef } from "react";
import ThreeDCard, { Project } from "./ThreeDCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData: Project[] = [
  {
    id: "explainmate",
    title: "EXPLAINMATE",
    subtitle: "A Graphic Video Editing Focused Website",
    imageSrc: "/exclimate.png",
    seeUrl: "#",
    liveUrl: "#",
  },
  {
    id: "explainmate-2",
    title: "EXPLAINMATE",
    subtitle: "A Graphic Video Editing Focused Website",
    imageSrc: "/exclimate.png",
    seeUrl: "#",
    liveUrl: "#",
  },
  {
    id: "explainmate-3",
    title: "EXPLAINMATE",
    subtitle: "A Graphic Video Editing Focused Website",
    imageSrc: "/exclimate.png",
    seeUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectsPage(): JSX.Element {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Use gsap.context for proper scoping and cleanup in React
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      // animate each card as it scrolls into view
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 2.5,
          ease: "power3.inOut",
          // Create a ScrollTrigger per-card so each triggers individually when it enters viewport
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // when top of card hits 85% from top of viewport
            toggleActions: "play none none reverse",
            // markers: true, // uncomment for debugging
          },
        });
      });
    }, gridRef); // scope to the gridRef element

    // cleanup on unmount
    return () => {
      ctx.revert();
      // Also ensure all ScrollTriggers are killed (defensive)
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-6">Projects</h2>

        {/* gridRef used for scoping animations (gsap.context) */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p) => (
            // ensure a safe key when id could be undefined
            <ThreeDCard key={p.id ?? p.title} data={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
