import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import LinkElement from "./LinkElement";
interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white">
        <div className="nav-link-mobile">
          <LinkElement link="home" link_text="HOME" />
        </div>
        <div className="nav-link-mobile">
          <LinkElement link="about" link_text="ABOUT" />
        </div>
        <div className="nav-link-mobile">
          <LinkElement link="services" link_text="SERVICES" />
        </div>
        <div className="nav-link-mobile">
          <LinkElement link="skills" link_text="SKILLS" />
        </div>
        <div className="nav-link-mobile">
          <LinkElement link="project" link_text="PROJECT" />
        </div>
        <div className="nav-link-mobile">
          <LinkElement link="experience" link_text="EXPERIENCE" />
        </div>
        {/* <div className="nav-link-mobile">
          <LinkElement link="review" link_text="REVIEW" />
        </div> */}
        <div className="nav-link-mobile">
          <LinkElement link="contact" link_text="CONTACT" />
        </div>
      </div>
      <div
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
        onClick={closeNav}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
