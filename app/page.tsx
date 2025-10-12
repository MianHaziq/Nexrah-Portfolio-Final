"use client";
import { navItems } from "@/data/index";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import FloatingNav  from "@/components/ui/FloatingNavbar";
import Contact from "@/components/ContactPage";
import GridSection from "@/components/GridSection";
import ChromaGrid from "@/components/ChromaGrid";
import ProjectsPage from "@/components/ProjectsPage";
import { TestimonalsDemo } from "@/components/TestimonalPage";
import TextMarqueePage from '../components/TextMarqueePage'
import Background from "@/components/Hyperspeed/Background";
export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
     
      
        <FloatingNav navItems={navItems} />
        <Hero />  
        <TextMarqueePage/>
        {/* <GridSection/> */}
        {/* <ProjectsPage/> */}
        <div className="bg-black p-0 m-0 " >
        <ChromaGrid/>
        <TestimonalsDemo/>
       <Contact/>
        {/* <Approach /> */}
        </div>
        <Footer />
      </div>
    </main>
    </>
  );
}
