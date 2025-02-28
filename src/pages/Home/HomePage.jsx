import React from "react";
import LandingSection from "../../components/home/LandingSection";
import AboutSection from "../../components/home/AboutSection";
import ProjectSection from "../../components/home/projects/ProjectSection";
import SkillsSection from "../../components/home/skills/SkillsSection";

export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </div>
  );
}
