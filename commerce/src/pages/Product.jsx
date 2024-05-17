import React, { useEffect } from "react";
import ProductsCategory from "../components/ProductsCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../features/homeSlice";
import ProductsList from "../components/ProductsList";

function Product() {
  const baseUrl = "http://localhost:1337";

  const data = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="flex  ">
      <div className="w-1/3">
        <ProductsCategory />
      </div>
      <div className=" w-3/4  max-md:w-full  flex flex-wrap   ">
        <div></div>
        {data?.products?.data?.map((eleman, index) => {
          return <ProductsList baseUrl={baseUrl} key={index} eleman={eleman} />;
        })}
      </div>
    </div>
  );
}

export default Product;
