"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shahriar Reza Shakil",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801608456891",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.5+ Years",
    },
    {
      fieldName: "Facebook",
      fieldValue: "https://www.facebook.com/shahriar.reza.35/",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:shahriarreza436",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Status",
      fieldValue: "Available",
    },
  ],
};

//experience data
const experience = {
  icon: "/images/verify.png",
  title: "My Experience",
  description:
    "I am a skilled web developer with a strong foundation in Next.Js, ReactJs, and other modern technologies. I possess excellent problem-solving and communication skills, enabling me to effectively collaborate with teams and deliver high-quality projects.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Front End Developer - Intern",
      duration: "Fall-2023",
    },
    {
      company: "Web Design Stdio",
      position: "Web Developer",
      duration: "2023-Present",
    },
  ],
};

//education data
const education = {
  icon: "/images/graduation-hat.png",
  title: "My Education",
  description:
    "I am a skilled web developer with a strong foundation in Next.Js, ReactJs, and other modern technologies. I possess excellent problem-solving and communication skills, enabling me to effectively collaborate with teams and deliver high-quality projects.",
  items: [
    {
      institute: "Daffodil International University",
      exam_Title: "B.Sc in Software Engineering",
      major: "Software Engineering",
      result: "3.46",
      passing_year: "2024",
      duration: "4 years",
    },
    {
      institute: "Cantonment Public School & College, Saidpur",
      exam_Title: "HSC",
      major: "Science",
      result: "4.17",
      passing_year: "2018",
      duration: "2",
    },
    {
      institute: "Ruhia High School",
      exam_Title: "SSC",
      major: "Science",
      result: "5.00",
      passing_year: "2016",
      duration: "-",
    },
  ],
};

//skills data
const skills = {
  icon: "/images/verify.png",
  title: "My Skills",
  description:
    "I am a skilled web developer with a strong foundation in Next.Js, ReactJs, and other modern technologies. I possess excellent problem-solving and communication skills, enabling me to effectively collaborate with teams and deliver high-quality projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Us</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">experience</TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">education</TabsContent>
          {/* experience */}
          <TabsContent value="skills" className="w-full">skills</TabsContent>
          {/* experience */}
          <TabsContent value="about" className="w-full">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
