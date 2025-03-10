import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="lg:px-[120px] px-10 py-5 bg-btn-color flex justify-between items-center absolute w-full overflow-hidden h-20 z-50 opacity-90">
      <h1 className="text-2xl font-semibold">{`<SHAFI />`}</h1>
      <div className="lg:flex gap-3 items-center text-lg hidden">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="bg-transparent border border-primary-100 px-4 py-1 rounded-md cursor-pointer">
        Contact
      </button>
    </div>
  );
}
