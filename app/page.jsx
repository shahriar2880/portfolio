import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Services from "./services/page";
import Resume from "./resume/page";

const Home = () => {
  return (
    <section className="h-full min-w-[320px]">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Shahriar Reza</span>
            </h1>
            <p className="max-w-[700px] mb-9 text-white/80">
              To obtain a challenging position in a dynamic organization where I
              can utilize my skills, knowledge, and experience to contribute to
              the company’s growth and success. 
            </p>
            {/* btn and social icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button varient="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <div><Stats/></div>
{/*       
      <div><Services/></div>
      <div><Resume/></div> */}
    </section>
  );
};

export default Home;
