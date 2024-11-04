import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex flex-wrap items-center justify-center grid-cols-3 gap-2 p-5 m-2 mx-8 xl:grid sm:mx-10 md:mx-14 bg-gray-50">
      {products.map(function (item) {
        return <Product className="mx-4" key={item.title} {...item} />;
      })}
    </div>
  );
}

export default ProductList;
