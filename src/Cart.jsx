import React from "react";
import ControlStrip from "./ControlStrip";
import CartList from "./CartList";

function Cart({ onSetToCart }) {
  return (
    <>
      <CartList onSetToCart={onSetToCart} />
    </>
  );
}

export default Cart;
