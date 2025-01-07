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
      "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
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
      "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
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
      "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
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
      "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
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
          <div>text</div>
          <div>slider</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
