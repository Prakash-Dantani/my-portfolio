import React from "react";
import { BsBootstrap } from "react-icons/bs";
import {
  DiCodeigniter,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import {
  SiChakraui,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skill = () => {
  return (
    <div id="skills" className="section-start-div">
      <p className="heading">
        MY <span className="text-yellow-400">SKills</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white h-100%">
        <div
          className="h-[100%]"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="relative hover:bg-transparent shadow-inner hover:shadow-lg border-[#5588e6] shadow-[#5588e6]/50 hover:shadow-[#5588e6]/100 border-2 hover:scale-105 transform transition-all duration-300 font-semibold text-center p-[1rem]">
            <h1 className="text-[16px] md:text-[20px] mt-[0.5rem] mb-[2rem] text-color-three  text-yellow-400 uppercase">
              Frontend Development
            </h1>

            <div className="grid grid-cols-2 w-[90%] mx-auto items-center gap-x-[2rem] gap-y-[2rem] text-white">
              <div className="technology-container">
                <DiHtml5 className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">HTML</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiCss3 className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">CSS</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiJavascript1 className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">Javascript</label>
                  <br /> Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiJqueryLogo className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">Jquery</label>
                  <br /> Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiReact className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">React JS</label>
                  <br /> Intermediate
                </div>
              </div>

              <div className="technology-container">
                <SiTypescript className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">TypeScript</label>
                  <br />
                  Intermediate
                </div>
              </div>

              <div className="technology-container">
                <BsBootstrap className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">Bootstrap</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <SiChakraui className="technology-icon" />
                <div className="expertise-text">
                  <span className="technology-name">Chakra UI</span>
                  <br />
                  Intermediate
                </div>
              </div>

              <div className="technology-container">
                <SiTailwindcss className="technology-icon" />
                <div className="expertise-text">
                  <span className="technology-name">Tailwind CSS</span>
                  <br />
                  Experienced
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-right"
          data-aos-delay="500"
          data-aos-duration="2000"
        >
          <div className="relative hover:bg-transparent shadow-inner hover:shadow-lg border-[#5588e6] shadow-[#5588e6]/50 hover:shadow-[#5588e6]/100 border-2 hover:scale-105 transform transition-all duration-300 font-semibold text-center p-[1rem]">
            <h1 className="text-[16px] md:text-[20px] mt-[0.5rem] mb-[2rem] text-color-three uppercase text-yellow-400">
              Backend Development
            </h1>

            <div className="grid grid-cols-2 w-[90%] mx-auto items-center gap-x-[2rem] gap-y-[2rem] text-white">
              <div className="technology-container">
                <DiNodejs className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">NODE JS</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <SiExpress className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">Express JS</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <SiNextdotjs className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">NEXT JS</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiPhp className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">PHP</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiLaravel className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">LARAVEL</label>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiCodeigniter className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">Codeigniter</label>
                  <br />
                  Beginner
                </div>
              </div>

              <div className="technology-container">
                <DiMongodb className="technology-icon" />
                <div className="expertise-text">
                  <label className="technology-name">MongoDB</label>
                  <br />
                  Intermediate
                </div>
              </div>

              <div className="technology-container">
                <DiMysql className="technology-icon" />
                <div className="expertise-text">
                  <span className="technology-name">Mysql</span>
                  <br />
                  Experienced
                </div>
              </div>

              <div className="technology-container">
                <DiPostgresql className="technology-icon" />
                <div className="expertise-text">
                  <span className="technology-name">PostgreSQL</span>
                  <br />
                  Experienced
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
