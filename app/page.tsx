"use client";
import { navItems } from "@/data/index";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingNav  from "@/components/ui/FloatingNavbar";
import Contact from "@/components/ContactPage";
import ChromaGrid from "@/components/ChromaGrid";
import ProjectsPage from "@/components/ProjectsPage";
import { TestimonalsDemo } from "@/components/TestimonalPage";
import TextMarqueePage from '../components/TextMarqueePage'
export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
     
      
        <FloatingNav navItems={navItems} />
        <Hero />  
        <TextMarqueePage/>
       
        <div className="bg-black p-0 m-0 " >
        <ProjectsPage/>
        <ChromaGrid/>
        <TestimonalsDemo/>
       <Contact/>
        </div>
        <Footer />
      </div>
    </main>
    </>
  );
}
