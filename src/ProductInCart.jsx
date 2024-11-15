import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import ItemNotFound from "./ItemNotFound";

function ProductInCart({ id, quantity }) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      let p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  function onButtonClick(event) {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <ItemNotFound />;
  }

  return (
    <>
      <div className="flex flex-col p-3 m-5 text-gray-700 bg-white border shadow-2xl sm:m-5 xl:m-10 md:flex-row sm:p-10">
        <img
          className="self-center w-full md:w-40 sm:w-80 xl:w-20 h-fit"
          src={product.thumbnail}
        />
        <div className="flex flex-col items-center content-start w-full gap-5 text-xl text-gray-600 md:gap-10 xl:gap-20 md:flex-row px-3s sm:px-10">
          <h1 className="justify-start text-xl font-bold md:text-4xl xl:text-2xl">
            {product.title}
          </h1>
          <h2 className="justify-center my-5 font-bold text-orange-500 text-md md:text-3xl xl:text-xl">
            ${product.price}
          </h2>
          <input
            className="justify-end w-24 text-3xl text-center border"
            type="number"
            value={quantity}
          />
        </div>
      </div>
    </>
  );
}
export default ProductInCart;
