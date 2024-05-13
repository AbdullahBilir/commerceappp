import React from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-[80px] px-4 font-medium">
      <div className="left flex items-center gap-6 text-sm font-md ">
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Men</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Women</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Children</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Accessories</Link>
        </div>
      </div>

      <div className="text-2xl ">
        <Link to={"/"}>E-commerce</Link>
      </div>

      <div className="rigth flex items-center gap-6 text-sm  ">
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>HomePage</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>About</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Contact</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300">
          <Link to={""}>Stores</Link>
        </div>
        <div className="İcons flex gap-3 ">
          <CiSearch className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300 " />
          <CiUser className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300" />
          <CiHeart className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300" />
          <PiShoppingCartThin className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
