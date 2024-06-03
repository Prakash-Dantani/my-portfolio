import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll";
import LinkElement from "./LinkElement";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PRAKASH <span className="text-yellow-300">DANTANI</span>
        </h1>
        <div className="nav-link">
          <LinkElement link="home" link_text="HOME" />
        </div>
        <div className="nav-link">
          <LinkElement link="about" link_text="ABOUT" />
        </div>
        <div className="nav-link">
          <LinkElement link="project" link_text="PROJECT" />
        </div>
        <div className="nav-link">
          <LinkElement link="services" link_text="SERVICES" />
        </div>
        <div className="nav-link">
          <LinkElement link="skills" link_text="SKILLS" />
        </div>
        <div className="nav-link">
          <LinkElement link="experience" link_text="EXPERIENCE" />
        </div>
        <div className="nav-link">
          <LinkElement link="review" link_text="REVIEW" />
        </div>
        <div className="nav-link">
          <LinkElement link="contact" link_text="CONTACT" />
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
