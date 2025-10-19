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
export default function Home() {
  return (
    <>
 <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
  <FloatingNav navItems={navItems} />

  <section id="hero" className="hero h-screen w-screen">
    <Hero />
  </section>

  <section id="marquee">
    <TextMarqueePage />
  </section>

  <section id="technologies">
    <TechnologiesPage />
  </section>

  <section id="projects">
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
