import Image from "next/image";
import React from "react";

type CardExperiencepProps = {
  image: string;
  title: string;
  date: string;
  desc: string;
};
const CardExperience = ({ image, title, date, desc }: CardExperiencepProps) => {
  return (
    <div className="lg:w-4/12">
      <div className="bg-white bg-opacity-40 rounded-lg border border-slate-900 ">
        <Image
          src={image}
          width={400}
          height={300}
          alt="raimu"
          className="rounded-md w-full object-cover"
        />
      </div>
      <div className="flex gap-4 items-center mt-4">
        <h3 className="font-bold text-2xl capitalize">{title}</h3>
        <p className="font-sm text-semibold">{date}</p>
      </div>
      <p className=" text-slate-700 text-justify">{desc}</p>
    </div>
  );
};

export default CardExperience;
