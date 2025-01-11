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
    image: "/images/work-2.png",
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
    image: "/images/work-2.png",
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
    image: "/images/work-2.png",
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
    image: "/images/work-2.png",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 px-4 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
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
                    <li className="text-xl sm:text-xs text-accent" key={index}>
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
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%] mb-12">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt=""/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderBtns/>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
