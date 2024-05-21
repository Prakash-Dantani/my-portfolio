import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="footer-container">
        <div className="flex items-center space-x-6">
          <div className="footer-icon-container">
            <MapIcon className="footer-icon" />
          </div>
          <div>
            <h1 className="footer-item-heading">Address</h1>
            <p className="footer-item-text">Mehsana, Gujarat, India-384001.</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="footer-icon-container">
            <DevicePhoneMobileIcon className="footer-icon" />
          </div>
          <div>
            <h1 className="footer-item-heading">Phone</h1>
            <p className="footer-item-text text-nowrap">
              +91 8160-890-337 <br /> +91 8487-824-336
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="footer-icon-container">
            <EnvelopeIcon className="footer-icon" />
          </div>
          <div>
            <h1 className="footer-item-heading">Send Us Email</h1>
            <p className="footer-item-text">
              dantaniprakash08@gmail.com <br />
              prakashdantani8@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          Prakash Dantani @ {new Date().getFullYear()} | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
