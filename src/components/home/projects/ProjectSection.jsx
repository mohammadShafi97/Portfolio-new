import React from "react";
import InfiniteMenu from "./InfiniteMenu";

export default function ProjectSection() {
  const items = [
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586389/Screenshot_2025-02-26_213206_xt9wvo.png",
      link: "https://tronacademy.in/",
      title: "02 TRON ACADEMY",
      desc: "",
      description: "Swipe for more",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586389/Screenshot_2025-02-26_213236_nu84k6.png",
      link: "https://pizzakebabclub.com/",
      title: "03 PIZZA CLUB",
      desc: "",
      description: "Swipe for more",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586389/Screenshot_2025-02-26_213300_thgbx4.png",
      link: "https://englishmirrorofficial.com/",
      title: "04 ENGLISH MIRROR",
      desc: "",
      description: "Swipe for more",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586498/Screenshot_2025-02-26_214413_gz0xmb.png",
      link: "https://bemax-ts-portal.onrender.com/",
      title: "05 BEMAX PORTAL",
      desc: "",
      description: "Swipe for more",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586389/Screenshot_2025-02-26_213131_yasonh.png",
      link: "https://dahabminers.com/",
      title: "01 DAHAB MINERS",
      desc: "",
      description: "Swipe for more",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_green,b_rgb:262c35/v1740586499/Screenshot_2025-02-26_214353_nm2ftw.png",
      link: "https://proshop-408l.onrender.com",
      title: "06 PROSHOP",
      desc: "",
      description: "Swipe for more",
    },
  ];
  return (
    <div className="bg-black">
      <h3 className="py-10 text-3xl font-semibold text-center">
        Latest Projects
      </h3>
      <InfiniteMenu items={items} />
    </div>
  );
}
