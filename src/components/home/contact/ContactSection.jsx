import { motion } from "framer-motion";
import React from "react";
import { CiPhone, CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <div id="contact" className="lg:px-[120px] px-5 py-10 text-black">
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center bg-green-50 p-5 rounded-lg">
        <div className="md:w-1/2 flex flex-col md:items-start items-center gap-5 ">
          <p className="text-3xl md:text-left text-center font-semibold">
            Let's Build Something Amazing Together!
          </p>
          <p className="text-lg md:text-left text-center">
            Have a project idea or need a developer? Feel free to contact me for
            collaborations, freelance work, or just to say hi!
          </p>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-green-800 text-xl">
                <CiMail />
              </p>
              <p>shafishahuldq@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-green-800 text-xl">
                <CiPhone />
              </p>
              <p>+91 8921519852</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-green-800 text-xl">
                <CiLocationOn />
              </p>
              <p>Based on India. Available worldwide</p>
            </div>
          </div>
          <div className="flex gap-3 text-2xl text-green-900">
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }} // Smooth animation
              href="https://github.com/mohammadShafi97"
              target="_blank"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }} // Smooth animation
              href="https://www.linkedin.com/in/mohammed-shafi-5a6988201/"
              target="_blank"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }} // Smooth animation
              href="https://www.instagram.com/s_h_a_f_i__shahul/"
              target="_blank"
            >
              <FaInstagramSquare />
            </motion.a>
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }} // Smooth animation
              href="https://www.facebook.com/shafi.shahul.35"
              target="_blank"
            >
              <FaFacebookSquare />
            </motion.a>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <form className="flex flex-col gap-3 bg-green-200 p-5 rounded-lg w-full">
            <div className="flex flex-col gap-1">
              <label className="text-sm">Name</label>
              <input
                type="text"
                className="bg-green-300 rounded-sm px-2 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Email</label>
              <input
                type="text"
                className="bg-green-300 rounded-sm px-2 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Phone</label>
              <input
                type="text"
                className="bg-green-300 rounded-sm px-2 py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Message</label>
              <textarea
                className="bg-green-300 rounded-sm px-2 py-2"
                rows={5}
              />
            </div>
            <button className="py-2 bg-green-800 rounded-sm text-white">
              Lets Connect..
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
