import React from "react";

function ProductsCategory({ data }) {
  const filterItem = data?.products?.data?.map((eleman) => {
    return eleman.attributes.category;
  });

  const filterProducts = Array.from(new Set(filterItem));

  return (
    <div className=" my-2 px-16 gap-2 mt-10 ">
      <h1 className="my-4 text-xl font-semibold ">Products Category</h1>
      {filterProducts.map((item, index) => {
        return (
          <div key={index} className="flex gap-2 my-2 ">
            <input type="checkbox" />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsCategory;
