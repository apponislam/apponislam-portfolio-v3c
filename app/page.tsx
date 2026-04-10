import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { ExtraSections } from "@/components/sections/ExtraSections";
import { CustomCursor } from "@/components/common/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExtraSections />
        <Blog />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
