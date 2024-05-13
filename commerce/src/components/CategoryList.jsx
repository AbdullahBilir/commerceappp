import React from "react";

function CategoryList({ item, baseUrl }) {
  return (
    <div className="w-1/4 relative">
      <img
        className="h-[500px] w-full object-cover"
        src={baseUrl + item.attributes.img.data[0].attributes.formats.large.url}
      />
      <p className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[40px] border text-white cursor-pointer hover:bg-blue-500 transition-all duration-300">
        {item.attributes.title}
      </p>
    </div>
  );
}

export default CategoryList;
