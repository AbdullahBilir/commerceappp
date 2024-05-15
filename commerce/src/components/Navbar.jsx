import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex  justify-between items-center h-20 max-lg:h-20 px-4 font-medium ">
      <div
        className={` lg:flex max-lg:flex-col max-lg:absolute max-lg:px-12 right-0  top-20 max-lg:bg-white z-10  items-center gap-6  text-sm font-md ${
          show ? "" : "hidden"
        }`}
      >
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={""}>Men</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={""}>Women</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={""}>Children</Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={""}>Accessories</Link>
        </div>
      </div>

      <div className="text-2xl  ">
        <Link to={"/"}>E-commerce</Link>
      </div>
      <div className="flex gap-6 ">
        <div
          className={` lg:flex  max-lg:flex-col max-lg:absolute max-lg:px-[50px] right-0 top-[160px]   max-lg:bg-white z-10  items-center gap-6 max-lg:gap-y-2 text-sm font-md ${
            show ? "" : "hidden"
          }`}
        >
          <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2 ">
            <Link to={""}>HomePage</Link>
          </div>
          <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
            <Link to={""}>About</Link>
          </div>
          <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
            <Link to={""}>Contact</Link>
          </div>
          <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
            <Link to={""}>Stores</Link>
          </div>
        </div>
        <div className="İcons flex gap-3 items-center ">
          <CiSearch className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300 " />
          <CiUser className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300 max-md:hidden" />
          <CiHeart className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300 max-md:hidden" />
          <PiShoppingCartThin className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300 max-md:hidden" />
          <LiaBarsSolid
            className="text-lg cursor-pointer hidden max-lg:block hover:text-blue-500 transition-all duration-300 "
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
