"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

const about = {
  title: 'About Me',
  description: "I'm a highly motivated individual driven to build a successful career in [Your Industry]. I'm constantly seeking new challenges and opportunities to learn and grow. I believe in the power of hard work, dedication, and continuous learning.",
  info:[
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
  ]
}

const Resume = () => {
  return (
    <section className="">
      <div className="container mx-auto">Resume</div>
    </section>
  );
};

export default Resume;
