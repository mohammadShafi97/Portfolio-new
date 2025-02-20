import React from "react";
import Particles from "../Particles";
import TrueFocus from "../TrueFocus";
import RotatingText from "../RotatingText";

export default function LandingSection() {
  return (
    <div className="landing-height relative">
      <div className="h-screen">
        <Particles
          particleColors={["#bcf5df", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute top-0 left-0 flex justify-center w-full h-full">
        <div className="flex flex-col gap-5 items-center my-auto">
          <h1>Helloo</h1>
          <TrueFocus
            sentence="Im Shafi"
            manualMode={false}
            blurAmount={5}
            borderColor="green"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <RotatingText
            texts={["Full Stack Developer", "Teacher", "Engineer"]}
            mainClassName="px-2 sm:px-2 md:px-3 text-2xl bg-[#19d78d] text-black font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
}
