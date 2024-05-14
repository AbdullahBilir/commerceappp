import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../features/homeSlice";
import SlideList from "./SlideList";

function Slide({ setShow, show, desc }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className=" container mx-auto my-16 flex  px-4 basis-1/2 items-center ">
        <h1 className="text-2xl font-semibold w-1/4 text-gray-700">
          Best Sellers
        </h1>
        <p className=" w-3/4 text-sm text-gray-400 px-8 leading-6 tracking-wider">
          {show ? desc[1].substring(0, 150) : desc[1]}
        </p>
      </div>
      <div className="flex w-[1300px] mx-auto gap-5 my-4 ">
        {data?.card?.data?.map((item, index) => {
          return <SlideList key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Slide;
