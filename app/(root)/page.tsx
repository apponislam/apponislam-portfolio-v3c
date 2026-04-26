import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { ExtraSections } from "@/components/sections/ExtraSections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExtraSections />
      <Blog />
      <Contact />
    </main>
  );
}
