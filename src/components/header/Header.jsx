import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { handleChatClick } from "../../utils/whatsapp";

export default function Header() {
  const [showSmallHeader, setShowSmallHeader] = useState(false);

  return (
    <>
      <div className="lg:px-[120px] relative px-10 py-5 bg-btn-color flex justify-between items-center w-full overflow-hidden h-20 z-50 opacity-90">
        <h1 className="text-2xl font-semibold">{`<SHAFI />`}</h1>
        <div className="lg:flex gap-3 items-center text-lg hidden">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          onClick={handleChatClick}
          className="bg-transparent border border-primary-100 px-4 py-1 rounded-md cursor-pointer lg:block hidden"
        >
          Contact
        </button>
        <button
          className="text-xl lg:hidden"
          onClick={() => setShowSmallHeader(!showSmallHeader)}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <AnimatePresence>
        {showSmallHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full flex flex-col gap-3 text-lg bg-btn-color p-5"
          >
            <a
              href="#home"
              className="pb-2 border-b border-green-700"
              onClick={() => setShowSmallHeader(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="pb-2 border-b border-green-700"
              onClick={() => setShowSmallHeader(false)}
            >
              About
            </a>
            <a
              href="#project"
              className="pb-2 border-b border-green-700"
              onClick={() => setShowSmallHeader(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="pb-2 border-b border-green-700"
              onClick={() => setShowSmallHeader(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="pb-2 border-b border-green-700"
              onClick={() => setShowSmallHeader(false)}
            >
              Contact
            </a>
            <button
              onClick={handleChatClick}
              className=" border border-primary-100 px-4 py-1 rounded-md cursor-pointer w-fit"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
