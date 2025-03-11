import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SkillsSection() {
  const images = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/react.png",
    "/skills/node.png",
    "/skills/express.png",
    "/skills/mongodb.png",
    "/skills/bootstrap.png",
    "/skills/tailwind.png",
    "/skills/redux.png",
    "/skills/jquery.png",
    "/skills/postgress.png",
    "/skills/sql.png",
    "/skills/aws.png",
    "/skills/git.png",
    "/skills/next.png",
    "/skills/postman.png",
    "/skills/typescript.png",
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, y: 50, opacity: 0 }}
      animate={isInView ? { scale: 1, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:px-[120px] px-5 py-10 flex flex-col gap-10 items-center"
      id="skills"
    >
      <h4 className="text-3xl font-semibold text-center">My Skills</h4>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 place-content-center justify-center">
        {images.map((x, i) => (
          <motion.div
            className="bg-white w-fit p-5 rounded-lg flex justify-center items-center"
            key={i}
            initial={{ rotate: 0, scale: 1, backgroundColor: "#ffffff" }} // Initial state
            whileHover={{
              rotate: 360, // Rotate on hover
              scale: 1.3, // Scale up on hover
              backgroundColor: "#19d78d", // Change background color on hover
              transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
            }}
          >
            <img src={x} className="w-[100px] object-cover" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
