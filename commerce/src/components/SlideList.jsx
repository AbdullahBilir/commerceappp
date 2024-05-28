import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/homeSlice";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:1337";

function SlideList({ item }) {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const hanleClick = (eleman) => {
    dispatch(addProduct({ item: eleman }));
  };

  return (
    <div
      className="my-4"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <Link to={"/product"}>
        <img
          onClick={() => hanleClick(item)}
          className="w-[270px] h-[400px] shadow-md "
          src={
            baseUrl +
            item?.attributes?.image?.data[active ? 1 : 0]?.attributes?.formats
              ?.small?.url
          }
        />
      </Link>
      <p className="mt-3">{item?.attributes?.title}</p>
      <p className="text-sm font-bold mt-2">{item?.attributes?.Pirice} TL</p>
    </div>
  );
}

export default SlideList;
