import React from "react";
import { useSelector } from "react-redux";

function Basket() {
  const data = useSelector((state) => state.home);
  const baseUrl = "http://localhost:1337";

  console.log(data.basketProduct);

  return (
    <div className=" bg-slate-100">
      <div className="w-[450px] px-4 py-2">
        <h2 className="font-bold text-gray-600">Products In The Cart </h2>
        {data?.basketProduct?.map((item, index) => {
          return (
            <div key={index} className="flex items-start  mt-4 mb-2">
              <div className="w-[130px]">
                <img
                  className=" "
                  src={
                    baseUrl +
                    item?.attributes.image.data[0].attributes.formats.small.url
                  }
                />
              </div>
              <div className="pl-3">
                <h2 className="font-bold text-sm mb-2 text-gray-500">
                  {item.attributes.title}
                </h2>
                <p className="text-xs text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ex, eaque ratione rerum sequi hic.
                </p>
                <p className="text-xs my-4 text-blue-500 ">
                  {item?.attributes?.Pirice} TL<span className="ml-2">X</span>
                  <span className="ml-2">{item?.quantity}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
