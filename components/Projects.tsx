import React from "react";
import PageTitle from "./PageTitle";
import CardProject from "./CardProject";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bgProjects max-container padding-container py-10"
    >
      <PageTitle subtitle="Recent Projects" title="projects" />
      <div className="my-10 flex flex-col gap-5 lg:flex-row justify-center items-center">
        <CardProject
          image="/raimu.png"
          href="https://www.raimu.pro/"
          title="raimu.pro"
          alt="raimu"
        />
        <CardProject
          image="/iitc.png"
          href="https://iitc.intermediaamikom.org/"
          title="iit competition"
          alt="iitc"
        />
        <CardProject
          image="/edufree.png"
          href="https://edufree.vercel.app/"
          title="EDUFREE"
          alt="edufree"
        />
      </div>
    </section>
  );
};

export default Projects;
