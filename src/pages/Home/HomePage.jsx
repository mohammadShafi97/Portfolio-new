import React from "react";
import LandingSection from "../../components/home/LandingSection";
import AboutSection from "../../components/home/AboutSection";
import ProjectSection from "../../components/home/projects/ProjectSection";
import SkillsSection from "../../components/home/skills/SkillsSection";
import ContactSection from "../../components/home/contact/ContactSection";

export default function HomePage() {
  const year = new Date().getFullYear();
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <div className="flex justify-center">
        <p className="text-xs py-2">
          {`© ${year} Shafi. All rights reserved.`}{" "}
        </p>
      </div>
    </div>
  );
}
