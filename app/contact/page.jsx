"use client";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import {Select, SelectContent, SelectGroup,SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title:'Phone',
    description: "(+880) 1608 456891"
  },
  {
    icon: <FaEnvelope/>,
    title:'Email',
    description: "shahriarreza436@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>,
    title:'Address',
    description: "6/E, Bash Bari , Mohammadpur"
  },
]
const Contact = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">lorem10</p>
              {/* input */}
              <div>
                <input type='firstname' placeholder="First Name"/>
                <input type='lastname' placeholder="Last Name"/>
                <input type='email' placeholder="Email Address"/>
                <input type='phone' placeholder="Phone Number"/>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
