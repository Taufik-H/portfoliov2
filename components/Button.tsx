import Image from "next/image";
import React from "react";
type ButtonProps = {
  href: string;
  title: string;
  className?: string;
  icon?: string;
  variant: "btn_bluePrimary" | "btn_dark";
};

const Button = ({ href, title, icon, variant, className }: ButtonProps) => {
  return (
    <a
      href={href}
      className={`flexCenter items-center gap-3 ${className}  ${variant}`}
    >
      <label className="whitespace-nowrap cursor-pointer md:text-md">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
    </a>
  );
};

export default Button;
