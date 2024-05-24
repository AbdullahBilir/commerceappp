import React, { useEffect, useState } from "react";
import { addProduct } from "../features/homeSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductsList = React.memo(function ProductsList({ eleman, baseUrl }) {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addProduct({ item: item }));
  };

  return (
    <div className="w-1/4 max-2xl:w-1/3 max-lg:w-1/2 max-md:w-full my-6">
      <Link to={"/product"}>
        <img
          onClick={() => handleClick(eleman)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className="w-[250px] h-[350px] max-md:w-[275px] max-md:h-[400px] cursor-pointer"
          src={
            baseUrl +
            eleman.attributes.image.data[active ? 1 : 0].attributes.formats
              .small.url
          }
        />
      </Link>
      <div className="px-1 py-2">
        <p className="mt-2">{eleman.attributes.title}</p>
        <p>
          {eleman.attributes.Pirice}
          <span className="ml-1">TL</span>
        </p>
      </div>
    </div>
  );
});

export default ProductsList;
