import React from "react";
import CartRow from "./CartRow";
import { BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CAU from "./CAU";
import CTLs from "./CTLs";

function CartList({ onSetToCart }) {
  const myCart = localStorage.getItem("my-cart");
  if (!myCart || myCart == "{}") {
    return (
      <div className="flex flex-col items-center justify-center flex-grow gap-5 text-2xl font-semibold text-center bg-gray-100 text-rose-500 md:text-9xl">
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
      <div className="flex flex-col items-center justify-center text-center">
        {cart && (
          <div className="mb-10 min-w-96">
            <div className="items-center justify-between hidden w-full h-16 px-5 text-2xl font-semibold text-gray-700 bg-white border border-gray-300 md:flex">
              <h2 className="ml-20">Product</h2>
              <div className="flex items-center gap-10 px-5 justify-evenly lg:gap-20 xl:gap-32 2xl:gap-44">
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
              </div>
            </div>
            <div className="w-full">{listItems}</div>
            <CAU />
            <CTLs />
          </div>
        )}
      </div>
    </>
  );
}

export default CartList;
