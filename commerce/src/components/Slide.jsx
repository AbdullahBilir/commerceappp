import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../features/homeSlice";
import SlideList from "./SlideList";

function Slide() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  return (
    <div>
      <div className=" w-[1500px] mx-auto my-16 flex  px-4 basis-1/2 items-center ">
        <h1 className="text-2xl font-semibold w-1/4 text-gray-700">
          Featured Products
        </h1>
        <p className=" w-3/4 text-sm text-gray-400 px-8 leading-6 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel! Quam
          quod officiis distinctio eius quo laudantium molestias laboriosam non
          voluptate odit, optio sit quae cumque vero possimus dolorum pariatur
          veritatis suscipit unde explicabo ducimus fugiat animi amet
          accusantium. Molestiae, sapiente non? Saepe non dolorem labore odio
          laborum consectetur repellat.
        </p>
      </div>
      <div className="flex w-[1300px] mx-auto gap-5 my-4 ">
        {data?.card?.data?.map((item, index) => {
          return <SlideList item={item} />;
        })}
      </div>
    </div>
  );
}

export default Slide;
