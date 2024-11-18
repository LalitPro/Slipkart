import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import ItemNotFound from "./ItemNotFound";
import { TiDeleteOutline } from "react-icons/ti";

function CartRow({ id, quantity, onSetToCart }) {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(quantity);
  const [isVisible, setIsVisible] = useState(true);

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

  function removeItem() {
    const myCart = JSON.parse(localStorage.getItem("my-cart"));
    delete myCart[id];
    localStorage.setItem("my-cart", JSON.stringify(myCart));
    setIsVisible(false);
  }

  if (!isVisible) {
    return;
  }

  function handleCountChange(event) {
    setCount(+event.target.value);
    onSetToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full justify-between  p-3 text-gray-700 bg-white border-2 border-gray-200 shadow-2xl md:flex-row sm:p-10">
        <TiDeleteOutline
          onClick={removeItem}
          className="text-5xl self-center justify-self-start mr-3 hover:text-6xl"
        />
        <img
          className="self-center justify-self-start w-full md:w-40 sm:w-80 xl:w-20 h-fit"
          src={product.thumbnail}
        />
        <div className="flex justify-self-center flex-col items-center content-start w-full gap-5 text-xl text-gray-600 md:gap-10 xl:gap-20 md:flex-row px-3s sm:px-10">
          <h1 className="justify-start text-xl font-bold md:text-4xl xl:text-2xl">
            {product.title}
          </h1>
          <h2 className="justify-center my-5 font-bold text-orange-500 text-md md:text-3xl xl:text-xl">
            ${product.price}
          </h2>
          <div className="flex items-center justify-self-end justify-center gap-2">
            <button
              onClick={() => {
                setCount(count - 1);
                onSetToCart(id, count - 1);
              }}
              className="h-full px-2 text-3xl text-center border"
            >
              -
            </button>
            <input
              className="justify-end w-24 text-3xl text-center border"
              type="number"
              value={count}
              onChange={handleCountChange}
            />

            <button
              onClick={() => {
                setCount(count + 1);
                onSetToCart(id, count + 1);
              }}
              className="h-full px-2 text-3xl text-center border"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartRow;
