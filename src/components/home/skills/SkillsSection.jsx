import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const images = [
    "/skills/aws.png",
    "/skills/bootstrap.png",
    "/skills/css.png",
    "/skills/express.png",
    "/skills/git.png",
    "/skills/html.png",
    "/skills/jquery.png",
    "/skills/js.png",
    "/skills/mongodb.png",
    "/skills/next.png",
    "/skills/node.png",
    "/skills/postgress.png",
    "/skills/postman.png",
    "/skills/react.png",
    "/skills/redux.png",
    "/skills/sql.png",
    "/skills/tailwind.png",
    "/skills/typescript.png",
  ];
  return (
    <div className="px-[120px] py-10 flex flex-col gap-10 items-center">
      <h4 className="text-3xl font-semibold text-center">My Skills</h4>
      <div className="grid grid-cols-6 gap-10 place-content-center justify-center">
        {images.map((x, i) => (
          <motion.div
            className="bg-white w-fit p-5 rounded-lg flex justify-center items-center"
            key={i}
            initial={{ rotate: 0, scale: 1, backgroundColor: "#ffffff" }} // Initial state
            whileHover={{
              rotate: 360, // Rotate on hover
              scale: 1.3, // Scale up on hover
              backgroundColor: "#19d78d", // Change background color on hover
              transition: { duration: 0.9, ease: "easeInOut" }, // Smooth transition
            }}
          >
            <img src={x} className="w-[100px] object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
