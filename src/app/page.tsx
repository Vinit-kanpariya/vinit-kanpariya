import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <About/>
      <Contact />
    </div>
  );
}
