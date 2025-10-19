"use client";

import React, { useEffect, useRef, useState } from "react";
import WorkButton from "./WorkButton";
import Background from "@/components/Hyperspeed/Background";
interface TypewriterProps {
  words?: string[];
  startDelay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words = [" Experiences!", " Interfaces!"],
  startDelay = 3000,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 900,
  className = "",
}) => {
  const initial = words[0].replace(/[!?.]+$/, "");
  const [started, setStarted] = useState(false);
  const [text, setText] = useState(initial);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const current = words[wordIndex];

    if (!isDeleting) {
      if (text !== current) {
        timerRef.current = window.setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timerRef.current = window.setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text !== "") {
        timerRef.current = window.setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        timerRef.current = window.setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 200);
      }
    }

    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, [text, isDeleting, started, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span
      className={`bg-gradient-to-r from-amber-400 via-yellow-200 to-yellow-600 bg-clip-text text-transparent font-extrabold ${className}`}
      aria-live="polite"
    >
      User {text}
      <span className="inline-block ml-1 rounded bg-amber-400 align-middle animate-pulse" />
    </span>
  );
};

// ✅ Lightweight in-view hook
function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
          break;
        }
      }
    }, options);

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, [options]);

  return { ref, inView } as const;
}

const Hero: React.FC = () => {
  const { ref: contentRef, inView } = useInView<HTMLDivElement>({ rootMargin: "-10%" });

  return (

    <>
<section className="relative min-h-screen w-full overflow-visible flex items-center justify-center select-none">
    <Background/>
   
    <div className="pb-20 pt-36 min-h-screen flex items-center justify-center">
      <div
        ref={contentRef}
        className={`max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center transform transition-all duration-700 ease-out
          ${inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <p className="uppercase tracking-widest text-xs text-amber-400 mb-2">
          Where Ideas Evolve into Digital Power
        </p>

        <h1 className="text-[36px] md:text-5xl lg:text-6xl font-extrabold mb-4">
          Transforming Concepts into Seamless{" "}
          <Typewriter
            words={[" Experience!", " Interfaces!"]}
            startDelay={3000}
            typingSpeed={70}
            deletingSpeed={40}
            pause={900}
          />
        </h1>

        <p className="text-sm md:text-lg lg:text-2xl mb-6">
          At <span className="font-semibold text-amber-400">Nexrah</span>, we craft exceptional web experiences that elevate brands and accelerate growth.
        </p>

        {/* <a href="#about">
          <WorkButton title="Contact Us" position="right" />
        </a> */}
      </div>
    </div>
    </section>
     </>
  );
};

export default Hero;
