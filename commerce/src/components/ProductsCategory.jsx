import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  filterItems,
  filterPrice,
  removeİtems,
} from "../features/homeSlice";

function ProductsCategory() {
  const [value, setvalue] = useState(0);

  const data = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const handleChange = (item) => {
    if (!data.card.includes(item)) {
      dispatch(filterItems({ item }));
    } else {
      dispatch(removeİtems({ item }));
    }
  };

  const handlefilter = (e) => {
    const newValue = Number(e.target.value);

    setvalue(newValue);
    dispatch(filterPrice({ value: newValue }));
    dispatch(filterCategory());
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

      <div className="my-6">
        <input
          className=""
          type="range"
          min={0}
          max={1600}
          step={50}
          value={value}
          onChange={(e) => handlefilter(e)}
        />
        <output className="ml-2">{value}</output>
      </div>
    </div>
  );
}

export default ProductsCategory;
