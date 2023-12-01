"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constant";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Button from "./Button";
const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={"/sideicon.svg"} width={30} height={30} alt="side menu" />
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-5 my-10">
          {NAV_LINKS.map((link) => (
            <Link
              className=" py-3 font-semibold text-center hover:font-bold transition-all "
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}

          <Button
            type="button"
            title="Contact me"
            icon="/call.svg"
            variant="btn_bluePrimary"
          />
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
