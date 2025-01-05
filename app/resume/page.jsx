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
    "I am a highly motivated and results-oriented web developer with 1.5 years of experience in building dynamic and user-friendly web applications. I possess a strong command of front-end technologies including React.js, Next.js, and Bootstrap, enabling me to create visually appealing and interactive user interfaces. My expertise extends to back-end development using Node.js, where I have experience building robust and scalable APIs. I am passionate about clean code, best practices, and delivering high-quality solutions that exceed client expectations.",
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
      duration: "-",
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
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    experience.items.map((item, index)=>{
                      return(
                        <li key={index} className="bg-[#252329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[286px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {
                    education.items.map((item, index)=>{
                      return(
                        <li key={index} className="bg-[#252329] h-[mx-auto] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.major}</span>
                          <span className="text-accent">{item.result}</span>
                          <span className="text-accent">{item.passing_year}</span>
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.exam_Title}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 items-center">
                {skills.skillList.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-3xl">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          {/* experience */}
          <TabsContent value="about" className="w-full">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
