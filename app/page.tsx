"use client";
import React, { useState } from "react";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar   */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/* Hero Section */}
        <Hero />
      </div>

      <div className="relative z-[30]">
        {/* About Section */}
        <About />

        {/* Services Section  */}
        <Services />
      </div>
    </div>
  );
};

export default HomePage;
