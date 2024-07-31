import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import DownloadCV from "./DownloadCV";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[2rem] md:pt-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalizemb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[90%] mt-[1.5rem] leading-relaxed text-justify">
              Hello! I am Prakash Dantani, a passionate and dedicated Full-Stack
              Developer and team leader with a robust background in creating
              high-performance, scalable web applications using the latest
              information and technologies and service industry.
              <br />
              <br />
              Specializes skills in : NodeJS, ExpressJS, PHP, Laravel, ReactJS,
              TypeScript, Javascript, Jquery, HTML, CSS, Bootstrap, Tailwind
              CSS, REST API Development, PostgreSql, MySql MongoDB, Git, Gitlab,
              Github, Bitbucket Slack.
              <br />
              <br />
              With a commitment to continuous learning and improvement, I am
              always eager to take on new challenges and contribute to impactful
              projects.
            </p>
          </div>
          <DownloadCV />
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/prd-user-3.jpg"
            alt="user"
            layout="fill"
            objectFit="cover"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
