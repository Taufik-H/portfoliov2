import Image from "next/image";
import React from "react";
type CardTitileProps = {
  jobtitle: string;
  image: string;
  totalproject: number;
  className?: string;
  CardNumber?: number;
};

const CardJob = ({
  jobtitle,
  CardNumber,
  image,
  totalproject,
  className,
}: CardTitileProps) => {
  return (
    <div
      className={`${className} bg-white w-64 rounded-3xl shadow-2xl shadow-blue-500  p-4`}
    >
      <p className="h-7 w-7 bg-gradient-to-tr from-blue-500 to-blue-200 rounded-full flexCenter items-center text-white font-bold">
        {CardNumber}
      </p>
      <div className="flex flex-col justify-center items-center py-8 gap-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt="uiux"
          className="w-fit"
        />
        <p className="font-bold text-blue-500 uppercase text-md mt-10">
          {jobtitle}
        </p>
        <p className="font-bold text-green-500  text-xs">
          {totalproject} projects
        </p>
      </div>
    </div>
  );
};

export default CardJob;
