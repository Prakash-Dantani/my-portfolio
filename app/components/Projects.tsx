import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[4rem] pb-[1rem]">
      <h1 className="heading">
        Proj <span className="text-yellow-400">ect</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <div className="project-div">
            <Image
              src="/images/p1.jpg"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <div className="project-div">
            <Image
              src="/images/p2.jpg"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <div className="project-div">
            <Image
              src="/images/p3.jpg"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
          <div className="project-div">
            <Image
              src="/images/p4.jpg"
              alt="Portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
