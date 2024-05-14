import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        MY <span className="text-yellow-400">SERVICES</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Front End
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              adipisci, ducimus sint ratione veritatis eligendi molestias nam
              ipsam! Ratione sint fuga fugiat illo molestias neque vitae, at
              perspiciatis vel placeat?
            </p>
          </div>
        </div>

        <div>
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Front End
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio perspiciatis quibusdam fugit nam, inventore eveniet sed
              qui sapiente excepturi, magnam fugiat amet molestiae quasi libero
              dolores. Velit praesentium aliquam provident.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Front End
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              repellat minus beatae reprehenderit nemo nostrum, optio dolorum
              quisquam ullam nobis eum eius nesciunt dolor, consequatur, nisi
              dicta est. Animi, dolor!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
