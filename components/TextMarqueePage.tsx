"use client";

import ScrollVelocity from "./ScrollVelocity";

const TextMarqueePage = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <div className="w-full text-center">
        <ScrollVelocity
          texts={["Imagine We Code ✦", "Get It Now ➔"]}
          velocity={100}
          className="custom-scroll-text text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold uppercase tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </div>
    </section>
  );
};

export default TextMarqueePage;
