"use client";

import React, { useState } from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="max-container padding-container" id="contact">
      <div className="bg-gradient-to-tr from-blue-700 to-blue-400 rounded-2xl w-full p-3 text-center flex py-20 flex-center items-center flex-col">
        <p className="uppercase text-white text-xs font-bold border-b border-white">
          Let's Discuss
        </p>

        <p className="text-3xl md:w-6/12 text-center font-black text-white my-10">
          Feel free to talk about something that you interested with
        </p>

        <Button
          title="Contact Me"
          href="mailto:taufikh.dev@gmail.com"
          variant="btn_dark"
          icon="/email.svg"
        />
      </div>
    </section>
  );
};

export default Contact;
