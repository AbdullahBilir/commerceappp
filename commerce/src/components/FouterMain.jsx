import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/homeSlice";

function FouterMain() {
  const data = useSelector((state) => state.home);
  const dispatch = useDispatch();

  data?.categories?.data?.map((eleman) => {
    console.log(eleman.attributes.title);
  });

  useEffect(() => {
    dispatch(fetchCategory);
  }, []);

  return (
    <div className="bg-slate-200 py-16  ">
      <div className="container mx-auto flex basis-1/4">
        <div className="w-full">
          <ul>
            <h1 className=" text-lg mb-1">Category</h1>
            {data?.categories?.data?.map((eleman, index) => {
              return (
                <li
                  className="mb-1 cursor-pointer  text-sm text-gray-500 capitalize"
                  key={index}
                >
                  <span className="hover:underline">
                    {eleman.attributes.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full text-sm capitalize text-gray-500">
          <ul>
            <h1 className="mb-1 text-lg text-black">Links</h1>
            <li className="mb-1 cursor-pointer hover:underline">Faq</li>
            <li className="mb-1 cursor-pointer hover:underline">Pages</li>
            <li className="mb-1 cursor-pointer hover:underline">Stores</li>
            <li className="cursor-pointer hover:underline">Compare</li>
          </ul>
        </div>
        <div className="px-6">
          <h1 className="mb-1">About</h1>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ducimus minus earum! Ex atque error recusandae et vero consequatur
            autem voluptatem, alias, aliquam facere cumque tempora explicabo.
            Natus, voluptas beatae?
          </p>
        </div>
        <div className=" px-6">
          <h1 className="mb-1">Contact</h1>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            voluptatibus mollitia nam culpa voluptatem quisquam dolores optio
            minima rem eaque non dolorem qui, officia possimus totam sapiente
            saepe perspiciatis explicabo!
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="mt-12 text-xs ">@Copyright 2024 All Rights Reserved </h1>
      </div>
    </div>
  );
}

export default FouterMain;