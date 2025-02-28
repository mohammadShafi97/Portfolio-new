import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-[120px] py-5 bg-btn-color flex justify-between items-center absolute w-full overflow-hidden h-20 z-50 opacity-90">
      <h1 className="text-2xl font-semibold">{`<SHAFI />`}</h1>
      <div className="flex gap-3 items-center text-lg">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
      <button className="bg-transparent border border-primary-100 px-4 py-1 rounded-md cursor-pointer">
        Contact
      </button>
    </div>
  );
}
