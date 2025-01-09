"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "I'm a highly motivated individual driven to build a successful career in Software Industry. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "I'm a highly motivated individual driven to build a successful career in Software Industry. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "I'm a highly motivated individual driven to build a successful career in Software Industry. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "I'm a highly motivated individual driven to build a successful career in Software Industry. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-cyan-500 text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project decription */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div>
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">slider</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
