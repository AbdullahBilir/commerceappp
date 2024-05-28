import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { remevoBasket, resetBasket } from "../features/homeSlice";
import { Link } from "react-router-dom";

function Basket() {
  const data = useSelector((state) => state.home);
  const baseUrl = "http://localhost:1337";
  const dispatch = useDispatch();

  const subTotalItem = data.basketProduct.map((item) => {
    return item.quantity * item.attributes.Pirice;
  });

  let totalItem = 0;

  for (let i = 0; i < subTotalItem.length; i++) {
    totalItem += subTotalItem[i];
  }

  const handeClick = (item) => {
    dispatch(remevoBasket({ id: item }));
  };

  const resetClick = () => {
    dispatch(resetBasket());
  };

  return (
    <div className=" bg-slate-50">
      <div className="w-[450px] px-4 py-2">
        <h2 className="font-bold text-gray-600">Products In The Cart </h2>
        {data?.basketProduct?.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <div className="flex items-start  mt-4 mb-2">
                <div className="w-[130px]">
                  <img
                    className=" "
                    src={
                      baseUrl +
                      item?.attributes.image.data[0].attributes.formats.small
                        .url
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
              <div
                onClick={() => handeClick(item.id)}
                className="ml-4 mb-8 cursor-pointer"
              >
                <FaRegTrashAlt className="text-red-600" />
              </div>
            </div>
          );
        })}
        <div className=" flex justify-between font-bold my-4 px-2">
          <h2 className="text-lg">SubTotal:</h2>
          <p className="text-normal">{totalItem} TL</p>
        </div>
        <button
          onClick={resetClick}
          className="ml-2 px-2 btn py-1 my-2 rounded-sm border-none text-white bg-red-500"
        >
          Reset Products
        </button>
      </div>
    </div>
  );
}

export default Basket;
