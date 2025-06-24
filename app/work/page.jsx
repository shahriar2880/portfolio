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
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "UniDrive - AI-Enhanced Car Rental Platform",
    description:
      "A user-friendly car rental platform offering real-time vehicle availability, dynamic pricing, and seamless booking with AI-enhanced UX features.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Express.js" },{ name: "MongoDB" },{ name: "Tailwind CSS" },{ name: "Firebase Auth" }],
    image: "/images/work-2.png",
    live: "https://uni-drive-client.vercel.app/",
    github: "https://github.com/shahriar2880/uni-drive-client",
  },
  {
    num: "02",
    category: "Front-end",
    title: "Tour Dojo - Tour Management Web Platform",
    description:
      "A featured tour and travel management web application designed to help users explore, book, and manage travel experiences effortlessly.",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "React Icons" }, { name: "React Datepicker" }],
    image: "/images/work-3.png",
    live: "https://tour-diyo.vercel.app/",
    github: "https://github.com/shahriar2880/tour-diyo",
  },
  {
    num: "03",
    category: "Front-end",
    title: "Software Socket.io – Startup Landing Page",
    description:
      "A sleek and responsive landing page built to showcase startup services with modern UI/UX design and interactive animations.",
    stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "Swiper.js" }],
    image: "/images/work-3.png",
    live: "shahriar-startup-agency.vercel.app
    github: "https://github.com/shahriar2880/startup-agency",
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
    <section className="min-h-[80vh] flex flex-col justify-center py-12 px-4 xl:px-0">
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
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p >Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
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
              className="xl:h-[520px] mb-12"
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
              <WorkSliderBtns containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
