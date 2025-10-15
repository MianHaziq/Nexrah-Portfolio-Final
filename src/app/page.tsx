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
export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
     
      
        <FloatingNav navItems={navItems} />
     <section className="hero">
      <div className="h-screen w-screen">
  <Hero />
  </div>
</section>

<section>
  <TextMarqueePage />
</section>

<section>
  <ProjectsPage />
</section>

<section>
  <ChromaGrid />
</section>

<section>
  <TestimonialSection />
</section>

<section>
  <Contact />
</section>

<section className="footer">
  <Footer />
</section>

      </div>
    </main>
    </>
  );
}
