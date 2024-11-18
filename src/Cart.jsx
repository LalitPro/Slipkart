import React from "react";
import ControlStrip from "./ControlStrip";
import ProductInCart from "./ProductInCart";

function Cart({ onSetToCart }) {
  const cart = JSON.parse(localStorage.getItem("my-cart")) || {};

  const listItems = Object.entries(cart).map(([key, value]) => {
    const productId = key;
    const quantity = value;

    console.log("key: ", key);
    console.log("value: ", value);

    return (
      <ProductInCart
        onSetToCart={onSetToCart}
        className="mx-4"
        id={key}
        quantity={value}
      />
    );
  });
  return (
    <>
      <ControlStrip />
      <div className="flex flex-col items-center justify-center flex-grow text-center bg-gray-100">
        {!cart && (
          <h1 className="m-5 text-2xl font-semibold text-rose-500 md:text-9xl">
            Your Cart is Empty
          </h1>
        )}
        {cart && (
          <>
            <div>{listItems}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
