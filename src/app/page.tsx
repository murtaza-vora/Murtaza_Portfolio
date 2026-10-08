import Navigation from "@/components/Navigation";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Work from "@/components/work/Work";
import Certifications from "@/components/certifications/Certifications";
import Experience from "@/components/experience/Experience";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Certifications />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
