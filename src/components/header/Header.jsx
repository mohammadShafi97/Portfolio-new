import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-[120px] py-5 bg-btn-color flex justify-between items-center top-2 rounded-full overflow-hidden absolute w-full">
      <h1 className="text-2xl font-semibold">{`<SHAFI />`}</h1>
      <div className="flex gap-3 items-center text-lg">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Skills</a>
        <a>Contact</a>
      </div>
      <button className="bg-transparent border border-primary-100 px-4 py-1 rounded-md">
        Contact
      </button>
    </div>
  );
}
