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
          duration: 2.5,
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
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl sm:text-4xl font-semibold mb-6 text-center">Projects</h1>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((p) => (
            <ThreeDCard key={p.id ?? p.title} data={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
