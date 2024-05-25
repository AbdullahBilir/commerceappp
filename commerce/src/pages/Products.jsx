import React, { useEffect, useState, useMemo } from "react";
import ProductsCategory from "../components/ProductsCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, filterCategory } from "../features/homeSlice";
import ProductsList from "../components/ProductsList";

function Products() {
  const baseUrl = "http://localhost:1337";
  const [sort, setSort] = useState(null);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.home);

  useEffect(() => {
    if (data.card.length > 0 || data.click) {
      dispatch(filterCategory());
    } else {
      dispatch(fetchItems());
    }
  }, [data.card, data.click, dispatch]);

  const sortedProducts = useMemo(() => {
    return data?.products?.data?.slice().sort((a, b) => {
      return sort === "inc"
        ? a?.attributes?.Pirice - b?.attributes?.Pirice
        : sort === "dec"
        ? b?.attributes?.Pirice - a?.attributes?.Pirice
        : 0;
    });
  }, [data.products, sort]);

  return (
    <div className="flex">
      <div className="w-1/4 max-md:hidden">
        <ProductsCategory />
      </div>
      <div className="w-3/4 max-md:w-full flex flex-wrap max-md:items-center max-md:justify-center relative">
        <div className="w-full flex justify-end items-start  px-8  ">
          <select
            className=""
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value={null}>Seçiniz</option>
            <option value={"inc"}>Artan</option>
            <option value={"dec"}>Azalan</option>
          </select>
        </div>
        {sortedProducts?.map((eleman) => (
          <ProductsList
            baseUrl={baseUrl}
            key={eleman.id}
            eleman={eleman}
            catId={eleman.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
