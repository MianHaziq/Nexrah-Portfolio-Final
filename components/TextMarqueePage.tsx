"use client";

import ScrollVelocity from "./ScrollVelocity";

const TextMarqueePage = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-4">
      <div className="w-full text-center">
        <ScrollVelocity
          texts={["Imagine We Code ✦", "Get It Now ➔"]}
          velocity={100}
          className="custom-scroll-text
            text-[60px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[140px]
            font-extrabold uppercase tracking-tight text-white md:p-6 lg:p-6 xl:p-6 sm-p2
            drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]
            transition-all duration-500 ease-in-out
            hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-[#0cc0df] 
            hover:text-transparent hover:bg-clip-text cursor-pointer
          "
        />
      </div>
    </section>
  );
};

export default TextMarqueePage;
