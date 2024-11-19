import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
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

  if (count < 0) {
    removeItem();
    return;
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
      <div className="flex flex-col justify-between w-full px-2 text-gray-700 bg-white border border-gray-300 shadow-2xl md:flex-row sm:px-10 sm:py-2">
        <TiDeleteOutline
          onClick={removeItem}
          className="self-center text-5xl text-gray-400 hover:text-gray-700 justify-self-start"
        />
        <img
          className="self-center w-full justify-self-start md:w-40 sm:w-80 xl:w-20 h-fit"
          src={product.thumbnail}
        />
        <div className="flex flex-col items-center content-start w-full gap-5 text-xl text-gray-600 justify-self-center md:gap-10 xl:gap-20 md:flex-row px-3s sm:px-10">
          <h1 className="justify-start text-xl font-bold text-red-500">
            {product.title}
          </h1>
          <h2 className="justify-center my-5 font-bold text-md">
            ${product.price}
          </h2>
          <div className="flex items-center justify-center justify-self-end">
            <button
              onClick={() => {
                setCount(count - 1);
                onSetToCart(id, count - 1);
              }}
              className="h-full px-1 text-3xl text-center border"
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
              className="h-full px-1 text-3xl text-center border"
            >
              +
            </button>
          </div>
          <h2 className="justify-center my-5 font-bold text-md">
            ${Math.floor(product.price * count)}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default CartRow;
