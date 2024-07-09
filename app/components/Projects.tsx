import Image from "next/image";
import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Projects = () => {
  return (
    <div
      id="project"
      className="pt-[4rem] md:pt-[4rem] pb-[3rem] section-start-div"
    >
      <h1 className="heading">
        Proj<span className="text-yellow-400">ect</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
        <div
          className="relative border-[1.5rem] project-div"
          data-aos="fade-left"
        >
          <div className="project-div-effect">
            <img
              src="/images/game-hub2.jpeg"
              alt="Description"
              className="w-full h-auto"
            />
            <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
              <p className="text-[17px] text-justify text-[#aaaaaa] font-normal pb-[2rem]">
                <span className="items-center">
                  A Game Portal community showcase developed in React JS and
                  Typescript with Chakra UI using &nbsp;
                  <a
                    href="https://rawg.io/"
                    target="_blank"
                    className="link text-blue-500 underline"
                  >
                    rwag.io
                  </a>
                  &nbsp; API.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative project-div"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="project-div-effect">
            <img
              src="/images/Expense-Tracker.png"
              alt="Description"
              className="w-full h-auto"
            />
            <div className="mt-4" data-aos="fade-up" data-aos-delay="600">
              <p className="text-[17px] text-justify text-[#aaaaaa] font-normal">
                <span className="flex items-center">
                  A Income Expense Tracker community showcase API developed in
                  Node JS, front end built in React Js with Typescript using
                  MongoDB database.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* <div data-aos="fade-up" data-aos-delay="600">
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
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
