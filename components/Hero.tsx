"use client";
import React from "react";
import Button from "./Button";
import { SOCIAL_MEDIAS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container  ">
      <div className="flex w-full flexCenter flex-col lg:flex-row gap-5">
        <div className="flexCenter flex-col items-center lg:flexStart lg:items-start w-full">
          <h2 className="py-2 px-6 text-sm w-fit bg-teal-50 border-teal-500 text-teal-500 border rounded-full font-medium">
            frontend engineer
          </h2>
          <div className="text-center lg:text-left ">
            <p className="mt-10 font-medium capitalize text-sm lg:text-4xl text-slate-900">
              hi i'm
            </p>
            <p className="capitalize text-5xl lg:text-6xl font-bold text-slate-900">
              Taufik Hidayatulloh
            </p>
            <p className="mt-5 text-sm lg:text-md text-slate-700 lg:w-7/12">
              i’m a UI/UX Designer and Frontend developer based in Central Java
              , Indonesia
            </p>
          </div>
          <div className="flexCenter gap-5 mt-5">
            <Button
              type="button"
              title="Let's Discuss"
              variant="btn_bluePrimary"
              icon="/chat.svg"
            />
            <Button
              type="button"
              title="Download CV"
              variant="btn_dark"
              icon="/download.svg"
            />
          </div>
          <p className="mt-10">Social Media :</p>
          <div className="flex gap-3 mt-4">
            {SOCIAL_MEDIAS.map((socialmedia) => (
              <Link
                href={socialmedia.href}
                key={socialmedia.key}
                className="hover:-mt-2 transition-all duration-200"
                target="_blank"
              >
                <Image
                  src={socialmedia.icon}
                  width={24}
                  height={24}
                  alt={socialmedia.label}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="h-full relative  lg:w-8/12  flex justify-center items-end ">
          <Image
            src={"/me.png"}
            height={500}
            width={500}
            alt="profile"
            className="w-full object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
