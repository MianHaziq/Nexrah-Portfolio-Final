"use client";

import { TestimonialPage } from "@/components/TestimonialPage";

export default function TestimonialSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white px-6 sm:px-10 py-16 overflow-hidden">
      {/* 🔹 Top Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-amber-400 uppercase">
          Testimonials
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Real voices. Real experiences.
        </p>
      </div>

      {/* 🔹 Content Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-10 lg:gap-16">
        {/* Left Text (2nd on mobile) */}
        <div className="order-2 lg:order-1 w-full lg:w-1/3 flex justify-center lg:justify-end text-center lg:text-right">
          <div className="max-w-sm">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              What people are saying about{" "}
              <span className="text-amber-400">Nexrah</span>.
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Hear directly from our users and partners who experienced
              innovation with Nexrah firsthand.
            </p>
          </div>
        </div>

        {/* Center Testimonials (3rd on mobile) */}
        <div className="order-3 lg:order-2 w-full lg:w-1/3 flex justify-center">
          <TestimonialPage />
        </div>

        {/* Right Text (4th on mobile) */}
        <div className="order-4 lg:order-3 w-full lg:w-1/3 flex justify-center lg:justify-start text-center lg:text-left">
          <div className="max-w-sm">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Trusted by{" "}
              <span className="text-amber-400">creators</span> and{" "}
              <span className="text-amber-400">builders</span>.
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base">
              Our mission is to empower teams to build exceptional digital
              experiences — efficiently and beautifully.
            </p>
          </div>
        </div>
      </div>
      <div>

      
      </div>
    </section>
  );
}
