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
            <div>
              <Button>
                <span>Download CV</span>
                <FiDownload/>
              </Button>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
