import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({
  projectNAme,
  projectImage,
  odd,
  description,
  tools,
  link,
}) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      className={`border border-[#19d78d] p-5 rounded-lg hover:scale-105 hover:shadow-lg shadow-[#19d78d] ease-in-out duration-500`}
    >
      <div
        className={`flex justify-between items-center ${
          odd ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <p className="text-2xl font-semibold">{projectNAme}</p>
        </div>
        <img src={projectImage} className="w-[500px] object-cover" />
      </div>
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="my-5 detail"
        >
          <p className="text-center text-green-100">{description}</p>
          <div className="flex flex-col items-center gap-5 my-5">
            <p>Tools Used</p>
            <div className=" flex gap-5">
              {tools?.map((x, i) => (
                <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center overflow-hidden">
                  <img src={x} className="w-14 object-cover overflow-hidden" />
                </div>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-[#19d78d] hover:bg-green-100 hover:scale-105 text-black font-semibold flex justify-center gap-1 items-center"
            >
              <span>Visit</span>
              <span>
                <MdArrowOutward />
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
