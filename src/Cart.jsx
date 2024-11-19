import React from "react";
import ControlStrip from "./ControlStrip";
import CartList from "./CartList";

function Cart({ onSetToCart }) {
  return (
    <>
      <ControlStrip />
      <div className="flex flex-col items-center justify-center flex-grow w-full p-5 bg-gray-200">
        <CartList onSetToCart={onSetToCart} />
      </div>
    </>
  );
}

export default Cart;
