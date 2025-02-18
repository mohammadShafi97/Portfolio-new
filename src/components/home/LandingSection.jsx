import React from "react";
import LetterGlitch from "../LetterGlitch";

export default function LandingSection() {
  return (
    <div className="h-screen">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      LandingSection
    </div>
  );
}
