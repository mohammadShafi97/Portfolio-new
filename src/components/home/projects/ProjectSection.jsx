import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const items = [
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586389/Screenshot_2025-02-26_213131_yasonh.png",
      link: "https://dahabminers.com/",
      title: "01 DAHAB MINERS",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/node.png",
        "/skills/express.png",
        "/skills/mongodb.png",
        "/skills/js.png",
        "/skills/redux.png",
        "/skills/aws.png",
      ],
      description:
        "A platform where you can buy crypto mining machines and choose a hosting for your machine.",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586389/Screenshot_2025-02-26_213206_xt9wvo.png",
      link: "https://tronacademy.in/",
      title: "02 TRON ACADEMY",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/js.png",
        "/skills/css.png",
      ],
      description:
        "A website for an academy in Thrisur, Kerala, India which gives training for digital marketing, coding and multimedia",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586388/Screenshot_2025-02-26_213332_oln0of.png",
      link: "https://handcar.ae",
      title: "03 HANDCAR",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/js.png",
        "/skills/css.png",
      ],
      description:
        "A platform where car owners and service providers meet where you can search for various services for your vehicle",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586389/Screenshot_2025-02-26_213236_nu84k6.png",
      link: "https://pizzakebabclub.com/",
      title: "04 PIZZA CLUB",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/js.png",
        "/skills/css.png",
      ],

      description:
        "A restraunt in UK Ireland which showcases there delightful menu of various foods",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586389/Screenshot_2025-02-26_213300_thgbx4.png",
      link: "https://englishmirrorofficial.com/",
      title: "05 ENGLISH MIRROR",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/js.png",
        "/skills/css.png",
      ],
      description:
        "A English Academy website which focusses on language training on Kerala and Tamil Nadu",
    },
    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586498/Screenshot_2025-02-26_214413_gz0xmb.png",
      link: "https://bemax-ts-portal.onrender.com/",
      title: "06 BEMAX PORTAL",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/node.png",
        "/skills/express.png",
        "/skills/mongodb.png",
        "/skills/js.png",
        "/skills/redux.png",
      ],
      description:
        "A prototype Website build for an IELTS, OET training institute for marking the records of attendance and scores for students and teachers",
    },

    {
      image:
        "https://res.cloudinary.com/dnimjeptu/image/upload/v1740586499/Screenshot_2025-02-26_214353_nm2ftw.png",
      link: "https://proshop-408l.onrender.com",
      title: "07 PROSHOP",
      tools: [
        "/skills/react.png",
        "/skills/tailwind.png",
        "/skills/node.png",
        "/skills/express.png",
        "/skills/mongodb.png",
        "/skills/js.png",
        "/skills/redux.png",
      ],
      description:
        "A simple E-commerce website where you can sell and buy items",
    },
  ];
  return (
    <div className="bg-black px-[120px] py-5">
      <h3 className="py-10 text-3xl font-semibold text-center">
        Latest Projects
      </h3>
      <div className="flex gap-10 flex-col ">
        {items.map((x, i) => (
          <ProjectCard
            key={x.title}
            projectImage={x.image}
            projectNAme={x.title}
            link={x.link}
            description={x.description}
            tools={x.tools}
            odd={(i + 1) % 2 === 0 ? false : true}
          />
        ))}
      </div>
    </div>
  );
}
