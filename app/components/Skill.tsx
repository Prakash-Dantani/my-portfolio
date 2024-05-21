import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import React from "react";
import { BsBootstrap } from "react-icons/bs";
import {
  DiCodeigniter,
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiJavascript1,
  DiJqueryLogo,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiReact,
  DiTypo3,
} from "react-icons/di";
import { FaDiagramNext } from "react-icons/fa6";
import { MdJavascript } from "react-icons/md";
import {
  SiChakraui,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skill = () => {
  return (
    <div className="section-start-div">
      <p className="heading">
        MY <span className="text-yellow-400">SKills</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white h-100%">
        <div className="h-[100%]">
          <div className="relative border-[#5588e6] border-2 hover:scale-105 transform transition-all duration-300 font-semibold text-center p-[1rem]">
            <h1 className="text-[16px] md:text-[20px] mt-[0.5rem] mb-[2rem] text-color-three  text-yellow-400 uppercase">
              Frontend Development
            </h1>

            <div className="grid grid-cols-2 w-[90%] mx-auto items-center gap-x-[2rem] gap-y-[2rem] text-white">
              <div className="technology-container">
                <DiHtml5 className="technology-icon" />
                <label className="technology-name">HTML</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiCss3 className="technology-icon" />
                <label className="technology-name">CSS</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiJavascript1 className="technology-icon" />
                <label className="technology-name">Javascript</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiJqueryLogo className="technology-icon" />
                <label className="technology-name">Jquery</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiReact className="technology-icon" />
                <label className="technology-name">React JS</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <SiTypescript className="technology-icon" />
                <label className="technology-name">TypeScript</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <BsBootstrap className="technology-icon" />
                <label className="technology-name">Bootstrap</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <SiChakraui className="technology-icon" />
                <span className="technology-name">Chakra UI</span>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <SiTailwindcss className="technology-icon" />
                <span className="technology-name">Tailwind CSS</span>
                <span className="expertise-text">Experienced</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative border-[#5588e6] border-2 hover:scale-105 transform transition-all duration-300 font-semibold text-center p-[1rem]">
            <h1 className="text-[16px] md:text-[20px] mt-[0.5rem] mb-[2rem] text-color-three uppercase text-yellow-400">
              Backend Development
            </h1>

            <div className="grid grid-cols-2 w-[90%] mx-auto items-center gap-x-[2rem] gap-y-[2rem] text-white">
              <div className="technology-container">
                <DiNodejs className="technology-icon" />
                <label className="technology-name">NODE JS</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <SiExpress className="technology-icon" />
                <label className="technology-name">Express JS</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <SiNextdotjs className="technology-icon" />
                <label className="technology-name">NEXT JS</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiPhp className="technology-icon" />
                <label className="technology-name">PHP</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiLaravel className="technology-icon" />
                <label className="technology-name">LARAVEL</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiCodeigniter className="technology-icon" />
                <label className="technology-name">Codeigniter</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiMongodb className="technology-icon" />
                <label className="technology-name">MongoDB</label>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiMysql className="technology-icon" />
                <span className="technology-name">Mysql</span>
                <span className="expertise-text">Experienced</span>
              </div>

              <div className="technology-container">
                <DiPostgresql className="technology-icon" />
                <span className="technology-name">PostgreSQL</span>
                <span className="expertise-text">Experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
