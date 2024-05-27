import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { RiScalesFill } from "react-icons/ri";
import { AddBasket, AddBasketProduct } from "../features/homeSlice";

function Product() {
  const data = useSelector((state) => state.home);

  const [count, setCount] = useState(1);
  const [active, setActive] = useState(0);

  const baseUrl = "http://localhost:1337";

  const dispatch = useDispatch();

  const handleClick = (count, item) => {
    dispatch(AddBasketProduct({ subİtem: item, item: count }));
    dispatch(AddBasket({ eleman: count }));
  };

  return (
    <div className="flex my-4 max-sm:flex-col">
      <div className=" basis-1/2">
        <div className="w-full flex">
          <div className="basis-1/4 px-6 max-xl:px-3 max-lg:px-2 max-md:hidden  ">
            <img
              onMouseEnter={() => {
                setActive(0);
              }}
              className="h-[150px] w-full pl-8 max-xl:pl-5 max-lg:pl-4  max-2xl:h-[125px] max-xl:h-[100px] "
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[0]?.attributes?.formats
                  ?.large?.url
              }
            />
            <img
              onMouseEnter={() => {
                setActive(1);
              }}
              className="h-[150px] w-full pl-8 max-xl:pl-5 max-lg:pl-4  max-2xl:h-[125px] max-xl:h-[100px] mt-4"
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[1]?.attributes?.formats
                  ?.large?.url
              }
            />
          </div>
          <div className="basis-3/4 pr-8 max-md:basis-full max-md:pl-4 max-sm:px-8">
            <img
              className="w-full h-[825px] max-2xl:h-[600px] max-xl:h-[525px] "
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[active]?.attributes
                  ?.formats?.large?.url
              }
            />
          </div>
        </div>
      </div>
      <div className="basis-1/2 max-sm:px-8 px-6 max-2xl:px-4 max-xl:px-2 max-lg:px-0  max-sm:my-4">
        <h2 className="font-bold text-4xl max-2xl:text-3xl max-xl:text-2xl">
          {data?.product?.attributes?.title}
        </h2>
        <p className="text-xl my-6  font-bold text-blue-500 max-2xl:my-4 max-xl:my-2  max-2xl:text-lg max-xl:text-normal ">
          {data?.product?.attributes?.Pirice} TL
        </p>
        <p className="w-4/5 my-4 max-xl:my-2 max-xl:text-sm">
          {data?.product?.attributes?.textTitle}
        </p>
        <p className="my-2 text-gray-500 text-sm max-lg:text-xs">
          {data?.product?.attributes?.textName}
        </p>
        <p className="my-2 text-gray-500 text-sm max-lg:text-xs">
          {data?.product?.attributes?.textInformation}
        </p>
        <p className="my-2 text-gray-500 text-sm max-lg:text-xs">
          {data?.product?.attributes?.textBody}
        </p>
        <div className="flex items-center my-10 max-2xl:my-4 max-xl:my-2 max-xl:text-sm">
          <div
            onClick={() => {
              setCount((prevCount) =>
                prevCount > 1 ? prevCount - 1 : prevCount
              );
            }}
            className="py-2 px-4 bg-gray-300 rounded-md cursor-pointer"
          >
            -
          </div>
          <div className="mx-4">{count}</div>
          <div
            onClick={() => {
              setCount(count + 1);
            }}
            className="py-2 px-4 bg-gray-300 rounded-md cursor-pointer"
          >
            +
          </div>
        </div>
        <div
          onClick={() => handleClick(count, data?.product)}
          className="px-4 py-2 my-10 flex items-center bg-blue-500 w-[200px] max-xl:my-4 rounded justify-center cursor-pointer"
        >
          <MdOutlineAddShoppingCart className="text-2xl text-white" />
          <p className="pl-2 text-white">Add To Card</p>
        </div>
        <div>
          <div className="flex items-center gap-4 max-xl:gap-2 text-blue-500 text-sm max-lg:text-xs ">
            <div className="flex items-center gap-2 ">
              <FaRegHeart className="cursor-pointer" />
              <div className="cursor-pointer">ADD TO FOVORİTE LİST</div>
            </div>
            <div className="flex items-center gap-2">
              <RiScalesFill className="cursor-pointer text-xl" />
              <div className="cursor-pointer">ADD TO COMPARE</div>
            </div>
          </div>
        </div>
        <div className="my-16 max-2xl:my-8 max-xl:my-4 text-sm text-gray-500 pr-16 max-2xl:text-xs">
          <p className="my-2">
            Vendor:{" "}
            <span className="ml-1">
              {data?.product?.attributes?.vendor.toUpperCase()}
            </span>
          </p>
          <p className="my-2">
            Product Type:{" "}
            <span className="ml-1">
              {data?.product?.attributes?.category.toUpperCase()}
            </span>
          </p>
          <p>
            Gender:{" "}
            <span className="ml-1">
              {data?.product?.attributes?.subCategory.toUpperCase()}
            </span>
          </p>
          <hr className="mt-4 " />
        </div>
        <div className="text-xs text-gray-500 ">
          <div className="my-2 ">
            <p className="my-1">DESCRIPTION</p>
            <hr className="w-[150px]" />
          </div>
          <div className="my-2">
            <p className="my-1">ITEM INFORMATİON</p>
            <hr className="w-[150px]" />
          </div>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
