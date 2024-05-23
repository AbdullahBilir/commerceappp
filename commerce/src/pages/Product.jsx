import React, { useEffect } from "react";
import ProductsCategory from "../components/ProductsCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, filterCategory } from "../features/homeSlice";
import ProductsList from "../components/ProductsList";

function Product() {
  const baseUrl = "http://localhost:1337";

  const data = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.card.length > 0 || data.click) {
      dispatch(filterCategory());
    } else {
      dispatch(fetchItems());
    }
  }, [data.card, data.click, dispatch]);

  return (
    <div className="flex  ">
      <div className="w-1/4 ">
        <ProductsCategory />;
      </div>
      <div className=" w-3/4  max-md:w-full  flex flex-wrap  px-12 ">
        <div className=" w-full flex justify-end px-20 ">
          <select>
            <option>Artan</option>
            <option>Azalan</option>
          </select>
        </div>
        {data?.products?.data?.map((eleman, index) => {
          return (
            <ProductsList
              baseUrl={baseUrl}
              key={index}
              eleman={eleman}
              catId={eleman.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
