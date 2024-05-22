import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { LiaBarsSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, filterItems, isClick } from "../features/homeSlice";

function Navbar() {
  const data = useSelector((state) => state.home);
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  const [click, setClick] = useState("");

  const dispacth = useDispatch();

  const handleClick = (eleman) => {
    dispacth(isClick({ click: eleman }));
    dispacth(filterCategory());
  };

  useEffect(() => {
    if (data.click) {
      const eleman = data.click;
      dispacth(filterCategory({ eleman: eleman }));
    }
  }, [data.click]);

  useEffect(() => {
    dispacth(isClick({ click }));
    dispacth(filterCategory());
  }, [click]);

  return (
    <div className="flex  justify-between items-center h-20 max-lg:h-20 px-4 font-medium ">
      <div
        className={` lg:flex max-lg:flex-col max-lg:absolute max-lg:px-12 right-0  top-20 max-lg:bg-white z-10  items-center gap-6  text-sm font-md ${
          show ? "" : "hidden"
        }`}
      >
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={"/product"} onClick={() => handleClick("man")}>
            Men
          </Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={"/product"} onClick={() => handleClick("women")}>
            Women
          </Link>
        </div>
        <div className=" hover:text-blue-500 transition-all duration-300 max-lg:pb-2">
          <Link to={"/product"} onClick={() => handleClick("children")}>
            Children
          </Link>
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
            <Link to={"/product"}>Stores</Link>
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
