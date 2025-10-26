"use client";
import { navItems } from "@/src/data/index";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingNav  from "@/components/ui/FloatingNavbar";
import Contact from "@/components/ContactPage";
import ChromaGrid from "@/components/ChromaGrid";
import ProjectsPage from "@/components/ProjectsPage";
import  TestimonialSection  from "@/components/TestimonialSection";
import TextMarqueePage from '@/components/TextMarqueePage';
import AboutUs from "@/components/AboutUs";
import TechnologiesPage from "@/components/TechnologiesPage";
import MarqueeTechScroll from "@/components/ui/annimation/MarqueeTechScroll";
export default function Home() {
  return (
    <>
 <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
  <FloatingNav navItems={navItems} />

  <section id="hero" className="hero h-screen w-screen">
    <Hero />
  </section>

<section id="marquee" className="relative min-h-screen w-full z-20">
    <TextMarqueePage />
  </section>

<section id="technologies" className="relative min-h-screen w-full z-30">
    <TechnologiesPage />
  </section>


        <MarqueeTechScroll />


<section id="projects" className="relative min-h-screen w-full z-10">
    <ProjectsPage />
  </section>

  <section id="about">
    <AboutUs />
  </section>

  <section id="testimonials">
    <TestimonialSection />
  </section>

  <section id="contact">
    <Contact />
  </section>

  <section id="footer" className="footer">
    <Footer />
  </section>
</main>

    </>
  );
}
