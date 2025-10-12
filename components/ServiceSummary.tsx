"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};

const ServiceSummary: React.FC<Props> = () => {
  const title1 = useRef<HTMLDivElement | null>(null);
  const title2 = useRef<HTMLDivElement | null>(null);
  const title3 = useRef<HTMLDivElement | null>(null);
  const title4 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (title1.current) {
        gsap.to(title1.current, {
          xPercent: 20,
          scrollTrigger: {
            trigger: title1.current,
            scrub: true,
          },
        });
      }

      if (title2.current) {
        gsap.to(title2.current, {
          xPercent: -30,
          scrollTrigger: {
            trigger: title2.current,
            scrub: true,
          },
        });
      }

      if (title3.current) {
        gsap.to(title3.current, {
          xPercent: 100,
          scrollTrigger: {
            trigger: title3.current,
            scrub: true,
          },
        });
      }

      if (title4.current) {
        gsap.to(title4.current, {
          xPercent: -100,
          scrollTrigger: {
            trigger: title4.current,
            scrub: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
      try {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      } catch (e) {
      }
    };
  }, []);

  return (
    <section
      aria-label="Services summary"
      className=" overflow-hidden font-light leading-snug text-5xl text-center mb-42 contact-text-responsive"
    >
      <div ref={title1} id="title-service-1">
        <p>Architucture</p>
      </div>

      <div
        ref={title2}
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-amber-400" />
        <p>Deployment</p>
      </div>

      <div
        ref={title3}
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p>Frontend</p>
        <div className="w-10 h-1 md:w-32 bg-amber-400" />
        <p className="italic">Backend</p>
        <div className="w-10 h-1 md:w-32 bg-amber-400" />
        <p>Api's</p>
      </div>

      <div ref={title4} id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
