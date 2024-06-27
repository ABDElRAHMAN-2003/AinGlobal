// Vision.jsx
import React from "react";
import {FallingContainer} from "./canvas";

const Vision = () => {
  return (
    <section className="bg-[#f4f4f4] bg-gray-pattern bg-cover bg-no-repeat bg-center flex flex-col items-center md:flex-row justify-between min-h-screen md:px-8">
      <div className="w-1/2 h-full">
        <FallingContainer />
      </div>
      <div className="w-1/2 md:pl-16 md:pr-10 lg:pr-24 text-black">
        <h2 className="  text-3xl">Vision</h2>
        <span className="">Our extensive network</span>
        <p className="text-lg pt-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,
        </p>
      </div>
    </section>
  );
};

export default Vision;
