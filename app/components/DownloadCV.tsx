import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

const DownloadCV = () => {
  return (
    <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6  text-[18px] font-bold uppercase">
      <div className="flex space-x-4 mt-4 text-black">
        <Link
          href="/docs/Prakash Dantani Resume.pdf"
          target="_blank"
          // download="/docs/Prakash Dantani Resume.pdf"
        >
          <button className="px-[1rem] hover:bg-yellow-400 transition-all duration-300 py-[1rem] text-nowrap bg-[#55e6a5] flex items-center space-x-2">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </Link>
        <Link href="#contact">
          {/* <Link href="https://wa.me/8160890337" target="_blank"> */}
          <button className="px-[1rem] hover:bg-blue-600 transition-all duration-300 py-[1rem] text-nowrap bg-blue-400 flex items-center space-x-2">
            <p>Let&apos;s Talk</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DownloadCV;
