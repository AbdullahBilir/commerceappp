import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, isClick } from "../features/homeSlice";
import { Link } from "react-router-dom";

function CategoryList({ item, baseUrl }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);

  const handleClick = (item) => {
    dispatch(isClick({ click: item.toLowerCase() }));
  };

  useEffect(() => {
    if (data.click) {
      dispatch(filterCategory());
    }
  }, [data.click, dispatch]);

  return (
    <div className="relative w-1/4 max-lg:w-1/2">
      <img
        className="h-[500px] max-lg:h-[400px] w-full object-cover"
        src={baseUrl + item.attributes.img.data[0].attributes.formats.large.url}
      />
      <Link to={"/product"}>
        <p
          onClick={() => handleClick(item.attributes.title)}
          className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[40px] border text-white cursor-pointer hover:bg-blue-500 transition-all duration-300"
        >
          {item.attributes.title}
        </p>
      </Link>
    </div>
  );
}

export default CategoryList;
