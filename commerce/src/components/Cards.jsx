import React, { useState } from "react";
import Home from "../pages/Home";

function Cards({ item, index }) {
  const [active, setActive] = useState(true);

  const baseUrl = "http://localhost:1337";

  return (
    <div>
      <div
        className="mr-4 my-5 cursor-pointer"
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
      >
        <img
          className="w-[300px] h-[450px]"
          src={
            baseUrl +
            item?.attributes?.image?.data[active ? 1 : 0]?.attributes?.formats
              ?.small.url
          }
        />
      </div>
      <div>
        <p className=" font-medium my-2 text-base">{item.attributes.title}</p>
        <p className="font-bold text-sm ">
          <span
            className={`${
              item.id == 6 ? "mr-4" : ""
            } line-through font-medium text-sm`}
          >
            {item.attributes.price2} {item.id == 6 ? "TL" : ""}
          </span>
          {item.attributes.Pirice}
          <span className="ml-1">TL</span>
        </p>
      </div>
    </div>
  );
}

export default Cards;
