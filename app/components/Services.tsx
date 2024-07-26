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
          <div className="hover:bg-transparent shadow-inner hover:shadow-lg border-[#5588e6] border-2 shadow-[#5588e6]/50 hover:shadow-[#5588e6]/100 hover:scale-105 transform transition-all duration-300 hover:rotate-1 text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[4rem] mx-auto" />
            <h1 className="text-[16px] md:text-[25px] mt-[1rem] mb-[1rem] uppercase font-semibold text-yellow-400">
              Front End
            </h1>
            <div
              className="text-justify text-[#d3d2d2] font-normal"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3rem]" />
                <p>
                  Complete web development from scratch{" "}
                  <span className="text-[#55e6a5]">
                    with React, TypeScript, HTML and CSS.
                  </span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[6rem]" />
                <p>
                  Frontend web development with React Js using a variety of UI
                  frameworks{" "}
                  <span className="text-[#55e6a5]">
                    such as Chakra UI, React Bootstrap, Ant Design, Tailwind
                    CSS, Custom CSS, and others.
                  </span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[2rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3rem]" />
                <p>
                  Customization, enhancement, integration, and bug correction{" "}
                  <span className="text-[#55e6a5]">
                    in react-based applications.
                  </span>
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="hover:bg-transparent shadow-inner hover:shadow-lg border-[#5588e6] border-2 shadow-[#5588e6]/50 hover:shadow-[#5588e6]/100 hover:scale-105 transform transition-all duration-300 hover:rotate-1 text-center p-[2rem]">
            <RocketLaunchIcon className="w-[4rem] h-[4rem] mx-auto " />
            <h1 className="text-[16px] md:text-[25px] mt-[1rem] mb-[1rem] uppercase font-semibold text-yellow-400">
              Back End
            </h1>
            <div
              className="text-justify text-[#d3d2d2] font-normal"
              data-aos="fade-up-right"
              data-aos-delay="400"
            >
              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[4.2rem]" />
                <p>
                  Complete backend development with{" "}
                  <span className="text-[#55e6a5]">
                    {" "}
                    Node JS, PHP and a various databases like MongoDB,
                    PostgreSQL, & SQL.
                  </span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" />{" "}
                <p>
                  <span className="text-[#55e6a5]">Rest API development</span>,
                  bug fixes, customization{" "}
                  <span className="text-[#55e6a5]">using Node Js.</span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" />{" "}
                <p>
                  <span className="text-[#55e6a5]">Rest API development</span>,
                  bug fixes, customization{" "}
                  <span className="text-[#55e6a5]">using PHP , Laravel.</span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3.5rem]" />
                <p>
                  <span className="text-[#55e6a5]">
                    Third party modules and cloud service
                  </span>{" "}
                  integrations, customization{" "}
                  <span className="text-[#55e6a5]">
                    in Node based applications.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="500">
          <div className="hover:bg-transparent shadow-inner hover:shadow-lg border-[#5588e6] border-2 shadow-[#5588e6]/50 hover:shadow-[#5588e6]/100 hover:scale-105 transform transition-all duration-300 hover:rotate-1 text-center p-[2rem]">
            <CommandLineIcon className="w-[4rem] h-[3rem] mx-auto" />
            <h1 className="text-[16px] md:text-[25px] mt-[1rem] mb-[1rem] uppercase font-semibold text-yellow-400">
              Full Stack
            </h1>
            <div
              className="text-justify text-[#d3d2d2] font-normal pb-2"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[5.5rem]" />
                <p>
                  Develope all-in-one{" "}
                  <span className="text-[#55e6a5]">
                    full stack application using Next JS and PHP
                  </span>{" "}
                  as well as with{" "}
                  <span className="text-[#55e6a5]">Laravel Framework </span>{" "}
                  with a variety of databases
                  <span className="text-[#55e6a5]">
                    {" "}
                    such as MongoDB, PostgreSQL, and SQL.
                  </span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[2.3rem]" />
                <p>
                  <span className="text-[#55e6a5]">Rest API development,</span>{" "}
                  bug fixes, customization{" "}
                  <span className="text-[#55e6a5]">
                    using Node, Next, PHP, and Laravel
                  </span>
                </p>
              </div>

              <div className="flex items-center text-[16px] pb-[1rem]">
                <HiOutlineBadgeCheck className="mr-3 text-[3.5rem]" />
                <p>
                  {" "}
                  My expertise spans both{" "}
                  <span className="text-[#55e6a5]">
                    front-end and back-end development,
                  </span>{" "}
                  ensuring seamless integration and functionality across the
                  entire stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
