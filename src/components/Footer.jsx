import { logo } from "../assets";
import React, { useRef, useState, useEffect } from "react";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="w-full" style={{ position: "relative", overflow: "hidden" }}>
      <footer className="bg-primary text-white py-2 rounded-t-lg">
        <div className="container mx-auto mt-">
          <div className="flex justify-center mt-2">
            <img src={logo} alt="logo" className="w-96 h-auto" />
          </div>
          <div className="flex justify-center mt-[-100px]">
            <p className="text-center text-white">&copy; 2024 Ain Global. All rights reserved.</p>
          </div>
          <div className="flex justify-center mt-2">
            <p className="text-center text-gray-500"> Developed By MASH</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
