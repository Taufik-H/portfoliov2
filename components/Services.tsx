"use client";
import React from "react";
import Button from "./Button";
import PageTitle from "./PageTitle";
import CardJob from "./CardJob";
import Image from "next/image";
import CountUp from "react-countup";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-100 py-10 max-container overflow-hidden"
    >
      <div className="max-container padding-container flex justify-center lg:justify-between h-auto w-full  items-center flex-col lg:flex-row ">
        <div className="relative flex flex-col justify-center md:justify-start items-center md:flex-row w-full gap-5 mb-10 lg:mb-5">
          <Image
            src={"/rect.svg"}
            height={325}
            width={760}
            alt="bg-rect"
            className="absolute left-[-100px] top-[150px] hidden lg:block"
          />
          <CardJob
            CardNumber={1}
            image="/uiux.svg"
            jobtitle="UIUX DESIGN"
            totalproject={2}
            className="lg:w-4/12 h-fit z-10"
          />
          <CardJob
            CardNumber={2}
            image="/programming.svg"
            jobtitle="Frontend engineer"
            totalproject={4}
            className="lg:w-4/12 lg:-ml-20 lg:mt-[200px] z-10"
          />
          <CardJob
            CardNumber={3}
            className="lg:w-4/12 h-fit lg:-ml-20 z-10"
            image="/vector.svg"
            jobtitle="Graphic Design"
            totalproject={2}
          />
        </div>
        <div className="flexCenter lg:flexStart lg:items-start items-center flex-col lg:w-7/12">
          <PageTitle title="services" subtitle="what can i do?" />
          <p className="align-justfy text-sm my-5">
            I can help you to solve your problem, the product I created is
            certainly done through the research process, which can later produce
            a product that matches what you want.
          </p>
          <hr className="w-full border-slate-300 border-b" />
          <div className="flex-col lg:flex-row flexStart items-center mt-5">
            <Button
              href="#projects"
              title="See My Projects"
              variant="btn_dark"
              className="h-fit"
            />

            <div className="rounded-xl w-full gap-5 lg:w-fit flex justify-around p-3">
              <div className="flexCenter flex-col items-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  <CountUp end={100} duration={2} />+
                </h3>
                <p className="text-xs text-slate-600">Project completed</p>
              </div>
              <div className="flexCenter flex-col items-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  <CountUp end={70} duration={2} />+
                </h3>
                <p className="text-xs text-slate-600">Positive Feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
