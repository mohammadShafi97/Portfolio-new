import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="text-primary-100 ">
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
