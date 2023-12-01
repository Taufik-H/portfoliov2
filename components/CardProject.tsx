import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardProjectProps = {
  image: string;
  title: string;
  href: string;
  alt: string;
};
const CardProject = ({ image, title, alt, href }: CardProjectProps) => {
  return (
    <div className="my-10">
      <Image
        src={image}
        width={394}
        height={394}
        className="rounded-2xl shadow-lg shadow-gray-300  w-full h-52 object-cover"
        alt={alt}
      />
      <p className="font-bold my-5 ">{title}</p>
      <Button
        title="Demo Website"
        href={href}
        variant={"btn_dark"}
        icon="/eye.svg"
      />
    </div>
  );
};

export default CardProject;
