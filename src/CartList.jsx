import React from "react";
import ControlStrip from "./ControlStrip";
import CartRow from "./CartRow";
import { BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function CartList({ onSetToCart }) {
  const myCart = localStorage.getItem("my-cart");
  if (!myCart || myCart == "{}") {
    return (
      <div className="flex flex-col items-center justify-center flex-grow text-center gap-5 bg-gray-100 text-2xl font-semibold text-rose-500 md:text-9xl">
        <Link to="/">
          <BsCartXFill />
        </Link>
        <h1>Your Cart is Empty</h1>
      </div>
    );
  }

  const cart = JSON.parse(myCart);

  const listItems = Object.entries(cart).map(([key, value]) => {
    const productId = key;
    const quantity = value;

    console.log("key: ", key);
    console.log("value: ", value);

    return <CartRow onSetToCart={onSetToCart} id={key} quantity={value} />;
  });
  return (
    <>
      <ControlStrip />
      <div className="flex flex-col items-center justify-center flex-grow text-center bg-gray-100">
        {cart && (
          <div className="min-w-96 mb-10">
            <div className="md:flex  hidden px-5 border-4 text-gray-700 font-semibold border-gray-200 bg-white md:w-full md:h-20 text-2xl items-center justify-between">
              <h2 className="ml-20">Product</h2>
              <div className="flex justify-evenly items-center gap-10 lg:gap-20 xl:gap-32 2xl:gap-44 px-5">
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
              </div>
            </div>
            <div>{listItems}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartList;
