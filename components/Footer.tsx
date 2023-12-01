import { SOCIAL_MEDIAS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexBetween items-center border-t-2 border-gray-100 max-container padding-container h-12 mt-10">
      <div className="font-bold text-blue-500 ">Portfolio</div>
      <div className="">&copy; copyright 2023 Taufik-H</div>
    </footer>
  );
};

export default Footer;
