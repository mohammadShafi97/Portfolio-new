import React from "react";

export default function AboutSection() {
  return (
    <div
      className="lg:px-[120px] px-5 py-5 flex flex-col items-center gap-5"
      id="about"
    >
      <h3 className="text-3xl font-semibold text-center">About Me</h3>
      <p className="max-w-[600px] text-center py-10 text-green-100">
        Hi, I'm Mohammad Shafi S., a passionate Full Stack Web Developer and
        Engineer from Kollam, Kerala, India. I graduated from TKM College of
        Engineering, one of the most prestigious institutions in the state.
      </p>
      <div className="flex flex-col gap-5 my-10 text-lg items-center">
        <div className="grid lg:grid-cols-3 justify-items-center gap-3 ">
          <div className="flex flex-col gap-5 text-green-100 lg:order-1 order-2">
            <p className="text-center">My Journey in Tech</p>
            <p className="text-center">
              From childhood, I have been fascinated by computers, which led me
              to develop strong technical expertise. My passion for coding is so
              deep that I can't end my day without spending at least two hours
              coding and learning about new technologies.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dnimjeptu/image/upload/v1740590677/about_d168wg.png"
            className="w-[250px] h-[250px] rounded-full object-cover border border-[#19d78d] order-1"
          />
          <div className="flex flex-col gap-5 text-green-100 lg:order-1 order-3">
            <p className="text-center">Skills & Expertise</p>
            <p className="text-center">
              I specialize in the MERN stack and have a strong foundation in:
              HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js,
              MongoDB, Git, GitHub. Beyond development, I also worked as a
              Technical Coordinator in a company for two years, where I honed my
              problem-solving and leadership skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-w-[500px] text-green-100">
          <p className="text-center">Teaching & Mentorship</p>
          <p className="text-center">
            I'm also a part-time teacher, and over 100 students have attended my
            coaching for higher secondary education. I love sharing knowledge
            and guiding aspiring developers and students toward success.
          </p>
        </div>
      </div>
    </div>
  );
}
