import React from "react";
import ExperienceItems from "./ExperienceItems";

const Experience = () => {
  return (
    <div id="experience" className="section-start-div">
      <p className="heading">
        MY <span className="text-yellow-400">Experience</span>
      </p>

      <div className="w-[80%] mx-auto pt-[2rem] md:pt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <ExperienceItems
            title="FullStack Developer"
            year="Sep-2021 to Current"
            content="Ensuring National Informatic Center met the specific needs of governmental operations. After successfully completing my initial project, I was reposted by NIC for another departmental project.
                  Later, I transitioned to some other industires under the NIC, where I continued to leverage my skills in full-stack development for various industries. This role allowed me to gain significant experience in both web development and database management while collaborating closely with stakeholders to deliver effective software solutions."
          />
          <ExperienceItems
            title="Software Supporter Cum Developer"
            year="Jan-2019 to Mar-2020"
            content="At Bluemax Services, I served as a Software Supporter and Developer, working with VB and SQL Server. I developed and maintained software for government services, optimized databases, and provided technical support. This role enriched my skills in application development and database management."
          />
        </div>
        <div>
          <ExperienceItems
            title="PHP Web Developer"
            year="Mar-2020 to Aug-2021"
            content="At Gujarat Infotech Ltd., I worked as a PHP Web Developer, specializing in developing software for government offices under the National Informatics Centre (NIC). I utilized PHP and PostgreSQL to create and maintain applications, ensuring they met the specific needs of governmental operations. This role allowed me to gain significant experience in both web development and database management while collaborating closely with government stakeholders to deliver effective software solutions."
          />
          <ExperienceItems
            title="Web Developer"
            year="Nov-2017 to Dec-2018"
            content="At Silverwig Technologies PVT. LTD., I worked as a PHP Web Developer. I developed and maintained web applications, managed databases, and collaborated with cross-functional teams. This role provided me with a strong foundation in backend and frontend development, setting the stage for my career growth."
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
