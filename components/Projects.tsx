import React from "react";
import PageTitle from "./PageTitle";
import Image from "next/image";
import Button from "./Button";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bgProjects max-container padding-container py-10"
    >
      <PageTitle subtitle="Recent Projects" title="projects" />
      <div className="my-10 flex flex-col gap-5 lg:flex-row justify-center items-center">
        <CardProject image="/raimu.png" title="raimu.pro" alt="raimu" />
        <CardProject image="/iitc.png" title="iit competition" alt="iitc" />
        <CardProject image="/edufree.png" title="EDUFREE" alt="edufree" />
      </div>
    </section>
  );
};

export default Projects;
