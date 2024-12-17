import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1-name mb-6">
              Hello I'm <br />
              <span className="text-accent">Shahriar Reza</span>
            </h1>
            <p className="max-w-[700px] mb-9 text-white/80">
              To obtain a challenging position in a dynamic organization where I
              can utilize my skills, knowledge, and experience to contribute to
              the company’s growth and success. I am seeking a role that allows
              me to apply my expertise, expand my professional horizons, and
              positively impact the field. I am eager to join a team-oriented
              environment that fosters collaboration, innovation, and continuous
              learning, enabling me to develop both personally and
              professionally.
            </p>
            {/* btn and social icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              {/* socials */}
              <div className="mb-8 xl:mb-8">
                <Social containerStyle="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-600"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div><Photo/></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
