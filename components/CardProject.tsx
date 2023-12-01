import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardProjectProps = {
  image: string;
  title: string;
  desc: string;
  icon: string;
};
const CardProject = ({ image, title, desc, icon }: CardProjectProps) => {
  return (
    <div className="my-10">
      <Image
        src={image}
        width={394}
        height={394}
        className="rounded-2xl shadow-lg shadow-slate-400"
        alt="raimu"
      />
      <p className="font-bold mt-5">{title}</p>
      <p className="mb-5 text-slate-700">{desc}</p>
      <Button
        title="Demo Website"
        type="button"
        variant={"btn_dark"}
        icon={icon}
      />
    </div>
  );
};

export default CardProject;
