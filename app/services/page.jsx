"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating stunning, user-friendly websites that captivate audiences and drive results. From sleek designs to robust functionalities, I deliver top-notch web solutions tailored to your unique needs. Let's build your online presence together.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I provide expert UI/UX design services to transform your ideas into visually appealing and intuitive digital experiences. From wireframing to prototyping, I ensure seamless user journeys and stunning aesthetics that leave a lasting impression. Let's create designs that captivate and convert.",
    href: "",
  },
  {
    num: "03",
    title: "Wordpress Theme Customization",
    description:
      "Enhance your WordPress website's look and feel with my expert customization services. From tweaking styles and layouts to adding new features, I'll transform your site into a unique online presence. Let's elevate your digital brand.",
    href: "",
  },
  {
    num: "04",
    title: "Data Entry",
    description:
      "I offer precise and efficient data entry services to streamline your operations. With a keen eye for detail and a commitment to accuracy, I'll handle your data with care. Let me take the burden off your shoulders and ensure your data is organized and accessible.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
          return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group:">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"></BsArrowDownRight>
                </Link>
              </div>
              {/* title */}
              <h2>{service.title}</h2>
              {/* description */}
              <p>{service.description}</p>
              {/* border */}
              {/* <div className="border-b border-white/20 w-full"></div> */}
            </div>
          );
        })}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
