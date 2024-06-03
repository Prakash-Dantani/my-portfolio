import React from "react";
import ExperienceItems from "./ExperienceItems";

const Experience = () => {
  return (
    <div id="experience" className="section-start-div">
      <p className="heading">
        MY <span className="text-yellow-400">Experience</span>
      </p>

      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <ExperienceItems title="React Developer" year="2014 - 2018" />
          <ExperienceItems title="Laravel Developer" year="2022 - 2024" />
        </div>
        <div>
          <ExperienceItems title="Next JS Developer" year="2014 - 2018" />
          <ExperienceItems title="FullStack Developer" year="2022 - 2024" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
