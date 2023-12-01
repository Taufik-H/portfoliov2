"use client";

import React, { useState } from "react";

const Contact = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Input Value:", inputValue);
    // Add additional functionality, such as sending the input value to a server or performing other actions.
  };

  return (
    <section className="max-container padding-container">
      <div className="bg-blue-500 rounded-lg w-full p-3 text-center flex flex-center items-center flex-col">
        <p className="uppercase text-white text-xs font-bold">Let's Discuss</p>

        <p className="text-3xl md:w-6/12 text-center font-black text-white mt-10">
          Feel free to talk about something that you are interested in
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Your Message"
            className="border-2 border-white p-2 rounded-md"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="mt-4 bg-white text-blue-500 py-2 px-6 rounded-full"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
