"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+880) 1608 456891",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahriarreza436@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "6/E, Bash Bari , Mohammadpur",
  },
];

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_rea5kkm', 'template_bukw9zg', form.current, {
        publicKey: 'LGWmw9axB6GPWbQxq',
      })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent text-center">
                Let's work together
              </h3>
              <p className="text-white/60">lorem10</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" name="firstname"/>
                <Input type="lastname" placeholder="Last Name" name="lastname"/>
                <Input type="email" placeholder="Email Address" name="user_email" />
                <Input type="phone" placeholder="Phone Number" name="phone" />
              </div>
              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem name="select"  value="est">Web Development</SelectItem>
                    <SelectItem name="select"  value="cst">UI/UX Design</SelectItem>
                    <SelectItem name="select"  value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here..."
                name="message"
              />
              {/* btn */}
              <Button size="md" className="max-w-40 h-12" value="Send">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
