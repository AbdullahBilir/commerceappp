import React from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-[80px] px-4 font-medium">
      <div className="left flex items-center gap-6 text-sm font-md ">
        <div>
          <Link to={""}>Men</Link>
        </div>
        <div>
          <Link to={""}>Women</Link>
        </div>
        <div>
          <Link to={""}>Children</Link>
        </div>
        <div>
          <Link to={""}>Accessories</Link>
        </div>
      </div>

      <div className="text-2xl ">
        <Link to={"/"}>E-commerce</Link>
      </div>

      <div className="rigth flex items-center gap-6 text-sm  ">
        <div>
          <Link to={""}>HomePage</Link>
        </div>
        <div>
          <Link to={""}>About</Link>
        </div>
        <div>
          <Link to={""}>Contact</Link>
        </div>
        <div>
          <Link to={""}>Stores</Link>
        </div>
        <div className="İcons flex gap-3 ">
          <CiSearch className="text-lg cursor-pointer " />
          <CiUser className="text-lg cursor-pointer" />
          <CiHeart className="text-lg cursor-pointer" />
          <PiShoppingCartThin className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
