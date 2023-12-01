import React from "react";
import PageTitle from "./PageTitle";
import Image from "next/image";
import CardExperience from "./CardExperience";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="max-container padding-container py-20 "
    >
      <PageTitle subtitle="my work experiences" title="experiences" />
      <div className="flexCenter flex-col md:flex-row items-cente mt-10 gap-5">
        <CardExperience
          title="FirstTech Agency"
          image="/raimu.png"
          date="Jan - Jun 2023"
          desc="as a Frontend Engineer i helping the company to make their AI Image
        generator project, there i learn about how to slicing website with
        clean code."
        />
        <CardExperience
          title="Intermedia"
          image="/iitc.png"
          date="Jan - Aug 2023"
          desc="build website competition management usin NextJs and Laravel i learn about API Integraton, NextJs, Website Optimization, tailwindCSS and more."
        />
        <CardExperience
          title="Freelance Project"
          image="/besmart.png"
          date="Jan - Jun 2023"
          desc="Make medical website about Hepatitis, i learn about the knowledge of the content, TailwindCss, Reactjs, webpack and more "
        />
      </div>
    </section>
  );
};

export default Experiences;
