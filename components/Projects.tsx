import React from "react";
import PageTitle from "./PageTitle";
import Image from "next/image";
import Button from "./Button";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <div className="bgProjects max-container padding-container py-10">
      <PageTitle subtitle="Recent Projects" title="projects" />
      <div className="my-10 flex flex-col lg:flex-row justify-around items-center">
        <CardProject
          image="/raimu.png"
          desc="AI imege generator build with ReactJs,TailwindCss"
          icon="/eye.svg"
          title="raimu.pro"
        />
        <CardProject
          image="/iitc.png"
          desc="Competition management build with NextJs, Laravel"
          icon="/eye.svg"
          title="iit competition"
        />
        <CardProject
          image="/edufree.png"
          desc="LMS Landing page build with ViteJs, TailwindCss"
          icon="/eye.svg"
          title="EDUFREE"
        />
      </div>
    </div>
  );
};

export default Projects;
