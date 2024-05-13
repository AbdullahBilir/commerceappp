import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/homeSlice";
import CategoryList from "./CategoryList";

function Category() {
  const data = useSelector((state) => state.home);

  const baseUrl = "http://localhost:1337";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="mt-4">
      <div className="flex  mx-auto ">
        {data?.categories?.data?.map((item, index) => {
          return <CategoryList key={index} item={item} baseUrl={baseUrl} />;
        })}
      </div>
    </div>
  );
}

export default Category;
