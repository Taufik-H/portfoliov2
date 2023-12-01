"use client";

import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween relative z-30 py-5 max-container padding-container items-center">
      <Link className="font-black text-blue-600 text-2xl" href={"/"}>
        Portfolio
      </Link>

      <div className="lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setIsOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute left-0 right-0 bg-white p-10 w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ul className="flex flex-col items-center mt-4 gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="text-slate-400 capitalize cursor-pointer pb-1.5 transition-all hover:font-medium hover:text-slate-800"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-slate-400 flexCenter capitalize cursor-pointer pb-1.5 transition-all hover:font-medium hover:text-slate-800"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* "Contact me" button for desktop */}
      <div className="hidden lg:flex justify-center">
        <Button
          type="button"
          title="Contact me"
          icon="/call.svg"
          variant="btn_bluePrimary"
        />
      </div>
    </nav>
  );
};

export default Navbar;
