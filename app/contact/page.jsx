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
            <form>form</form>
          </div>
          {/* info */}
          <div>info</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
