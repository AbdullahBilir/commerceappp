import React from "react";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import FouterMain from "./FouterMain";

function Fouter() {
  return (
    <div>
      <div className="bg-blue-500 mt-8  py-3 text-white">
        <div className="w-[1000px]  mx-auto flex justify-between items-center">
          <div className="text-sm">BE IN TOUCH WİTH US</div>
          <div className="flex items-center">
            <input
              className="px-2 py-1 rounded-sm"
              type="email"
              placeholder="Enter your Email"
            />
            <button className="btn bg-gray-700 font-semibold text-xs py-2 rounded-e-sm px-2 hover:bg-black transition-all duration-300">
              JOIN US
            </button>
          </div>
          <div className="flex text-gray-white text-lg gap-4 cursor-pointer ">
            <FaFacebook className=" rounden-full w-5 h-5 hover:text-gray-700 transition-all duration-300" />
            <FaInstagram className="rounden-full w-5 h-5 hover:text-gray-700 transition-all duration-300" />
            <FaTwitter className="rounden-full w-5 h-5 hover:text-gray-700 transition-all duration-300" />
            <FaYoutube className="rounden-full w-5 h-5 hover:text-gray-700 transition-all duration-300" />
          </div>
        </div>
      </div>
      <div>
        <FouterMain />
      </div>
    </div>
  );
}

export default Fouter;
