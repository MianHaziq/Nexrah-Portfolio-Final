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

export default function ProjectsPage() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, gridRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
      <div className="max-w-[1200px] w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-amber-400 uppercase mb-10 text-center">
          Projects
        </h1>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {projectsData.map((p) => (
            <ThreeDCard key={p.id ?? p.title} data={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
