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
      className={`relative border border-[#19d78d] p-5 rounded-lg hover:scale-105 hover:shadow-md shadow-[#19d78d] ease-in-out duration-300`}
    >
      <div
        className={`flex  flex-col justify-between gap-3 items-center ${
          odd ? "md:flex-row" : "md:flex-row-reverse"
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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-full absolute top-0 left-0 w-full bg-gradient-to-b from-50% from-[#19d78d] flex flex-col justify-center"
        >
          <p className="text-center text-white font-semibold">{description}</p>
          <div className="flex flex-col items-center md:gap-5 gap-2 md:my-5 mt-1">
            <p className="text-white md:text-lg font-semibold">Tools Used</p>
            <div className=" flex gap-5 flex-wrap justify-center">
              {tools?.map((x, i) => (
                <div className="bg-white md:w-16 md:h-16 w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
                  <img
                    src={x}
                    className="md:w-14 w-9 object-cover overflow-hidden"
                  />
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
