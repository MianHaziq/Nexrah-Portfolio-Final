"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { cn } from "@/src/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCardProps {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const images = imageRefs.current.filter(Boolean);
      const total = images.length;
      if (total === 0) return;

      // Initial states
      gsap.set(images[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < total; i++) {
        gsap.set(images[i], { y: "100%", scale: 1, rotation: 0 });
      }

      // Scroll animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        tl.to(
          images[i],
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          i
        );
        tl.to(
          images[i + 1],
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          i
        );
      }

      ScrollTrigger.refresh();

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <div
    ref={container}
    className={cn("relative w-full h-screen", className)} 
  >
    <div className="sticky-cards relative flex h-full w-full items-center justify-center overflow-hidden p-3 lg:p-8">
      <div
  className={cn(
    "relative w-full max-w-lg overflow-hidden rounded-lg sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl h-auto aspect-[16/9] sm:aspect-[16/9] md:h-[90%]",
    containerClassName
  )}
>

        {cards.map((card, i) => (
          <img
            key={card.id}
            src={card.image}
            alt={card.alt || ""}
            className={cn(
              // ⬇ Ensure images fill the container properly
              "absolute h-full w-full object-cover rounded-2xl",
              imageClassName
            )}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

const CardAbout = () => {
  const defaultCards = [
    { id: 1, image: "/card1.png" },
    { id: 2, image: "/card2.png" },
    { id: 3, image: "/card3.png" },
    { id: 4, image: "/card4.png" },
   
  ];

  return (
    <ReactLenis root>
      <StickyCard cards={defaultCards} />
    </ReactLenis>
  );
};

export default CardAbout;
