import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function Product() {
  const data = useSelector((state) => state.home);
  console.log(
    data?.product?.attributes?.image?.data[0]?.attributes?.formats?.large?.url
  );

  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const baseUrl = "http://localhost:1337";

  return (
    <div className="flex my-4 ">
      <div className=" basis-1/2">
        <div className="w-full flex">
          <div className="basis-1/4 px-6  ">
            <img
              onMouseEnter={() => {
                setActive(0);
              }}
              className="h-[150px] w-full pl-6"
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[1]?.attributes?.formats
                  ?.large?.url
              }
            />
            <img
              onMouseEnter={() => {
                setActive(1);
              }}
              className="h-[150px] w-full my-4 pl-6"
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[0]?.attributes?.formats
                  ?.large?.url
              }
            />
          </div>
          <div className="basis-3/4 pr-8">
            <img
              className="w-full h-[800px] "
              src={
                baseUrl +
                data?.product?.attributes?.image?.data[active]?.attributes
                  ?.formats?.large?.url
              }
            />
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <h2 className="font-bold text-4xl">
          {data?.product?.attributes?.title}
        </h2>
        <p className="text-xl my-6 font-bold text-blue-500">
          {data?.product?.attributes?.Pirice} TL
        </p>
        <p className="w-4/5 my-4">{data?.product?.attributes?.textTitle}</p>
        <p className="my-2 text-gray-500 text-sm">
          {data?.product?.attributes?.textName}
        </p>
        <p className="my-2 text-gray-500 text-sm ">
          {data?.product?.attributes?.textInformation}
        </p>
        <p className="my-2 text-gray-500 text-sm ">
          {data?.product?.attributes?.textBody}
        </p>
        <div className="flex items-center my-6">
          <div
            onClick={() => {
              setCount((prevCount) =>
                prevCount > 0 ? prevCount - 1 : prevCount
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
        <div className="px-4 py-2 my-6 flex items-center bg-blue-500 w-[200px] rounded justify-center cursor-pointer">
          <MdOutlineAddShoppingCart className="text-2xl text-white" />
          <p className="pl-2 text-white">Add To Card</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
