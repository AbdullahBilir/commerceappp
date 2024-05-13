import React, { useState } from "react";

const baseUrl = "http://localhost:1337";

function SlideList({ item }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="w-1/4"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <img
        className="w-[270px] h-[400px]"
        src={
          baseUrl +
          item.attributes.img.data[active ? 1 : 0].attributes.formats.small.url
        }
      />
      <p className="mt-3">{item.attributes.title}</p>
      <p className="text-sm font-bold mt-2">{item.attributes.price} TL</p>
    </div>
  );
}

export default SlideList;
