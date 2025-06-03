"use client";

import { Navbar } from "./composants/NavBar";
import { HeroSection } from "./composants/HeroSection";
import { SkillsSection } from "./composants/SkillSection";
import { ProjectsSection } from "./composants/ProjetsSection";
import { ContactSection } from "./composants/ContactSection";
import { Footer } from "./composants/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
