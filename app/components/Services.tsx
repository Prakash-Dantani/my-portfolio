import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121121] pt-[2rem] md:pt-[4rem] pb-[3rem]"
    >
      <p className="heading">
        MY <span className="text-yellow-400">SERVICES</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-left">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[16px] md:text-[25px] mt-[1rem] mb-[1rem] uppercase font-semibold ">
              Front End
            </h1>
            <p className="text-justify text-[#d3d2d2] font-normal">
              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3rem]" /> Complete
                web development from scratch with React, TypeScript, HTML and
                CSS.
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[6rem]" /> Frontend
                web development with React Js using a variety of UI frameworks
                such as Chakra UI, React Bootstrap, Ant Design, Tailwind CSS,
                Custom CSS, and others.
              </span>

              <span className="flex items-center text-[16px] pb-[2rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3rem]" />
                Customization, enhancement, integration, and bug correction in
                react-based applications.
              </span>
              <br />
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 text-center p-[2rem]">
            <RocketLaunchIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[16px] md:text-[25px] mt-[1rem] mb-[1rem] uppercase font-semibold ">
              Back End
            </h1>
            <p className="text-justify text-[#d3d2d2] font-normal">
              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[4.2rem]" /> Complete
                backend development with Node Js and a various databases like
                MongoDB, PostgreSQL, and SQL.
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" /> Rest API
                development, bug fixes, customization using Node Js.
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" /> Develope
                Rest API, bug fixes, customization using PHP.
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3.5rem]" /> Third
                party modules and cloud service integrations, customization in
                Node based applications.
              </span>
            </p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[3rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Full Stack
            </h1>
            <p className="text-justify text-[#d3d2d2] font-normal">
              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[5.5rem]" />
                Develope all-in-one full stack application using Next JS and PHP
                as well as with Laravel Framework with a variety of databases
                such as MongoDB, PostgreSQL, and SQL.
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" /> Rest API
                development, bug fixes, customization using Node, Next and PHP
              </span>

              <span className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3.5rem]" /> My
                expertise spans both front-end and back-end development,
                ensuring seamless integration and functionality across the
                entire stack.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
