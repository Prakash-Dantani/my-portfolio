import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import DownloadCV from "./DownloadCV";
import { BsAward } from "react-icons/bs";
import {
  FolderArrowDownIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[10vh]">
      <Particle />

      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;M <span className="text-yellow-400">PRAKASH!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92] leading-relaxed">
            I&apos;m a Full-Stack Software Developer specializing in building
            exceptional digital experiences.
          </p>

          <DownloadCV />
          <div className="grid grid-cols-3 pt-5 relative gap-[1rem]">
            <div className="flex flex-col items-center justify-center border-[1px] p-6">
              <div className="text-white bg-opacity-50 text-center">
                <BsAward className="h-10 w-10 pb-2 mx-auto" />
                <h2 className="text-xl font-semibold">Experience</h2>
                <span className="text-[#ffffff92]">6+ Years Working</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-[1px] p-6">
              <div className="text-white bg-opacity-50 text-center">
                <FolderArrowDownIcon className="h-10 w-10 pb-2 mx-auto" />
                <h2 className="text-xl font-semibold">Projects</h2>
                <span className="text-[#ffffff92]">15+ Completed</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-[1px] p-6">
              <div className="text-white bg-opacity-50 text-center">
                <UserGroupIcon className="h-10 w-10 pb-2 mx-auto" />
                <h2 className="text-xl font-semibold">Clients</h2>
                <span className="text-[#ffffff92]">10+ World Wide</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px]  bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/prd-user-5.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
