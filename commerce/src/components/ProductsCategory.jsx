import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterItems, removeİtems } from "../features/homeSlice";

function ProductsCategory() {
  const data = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const handleChange = (item) => {
    if (!data.card.includes(item)) {
      dispatch(filterItems({ item }));
    } else {
      dispatch(removeİtems({ item }));
    }
  };

  return (
    <div className=" my-2 px-16 gap-2 mt-10 ">
      <h1 className="my-4 text-xl font-semibold ">Products Category</h1>
      {data.ProductsCategory.map((item, index) => {
        return (
          <div key={index} className="flex gap-2 my-2 ">
            <input type="checkbox" onChange={() => handleChange(item)} />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsCategory;
