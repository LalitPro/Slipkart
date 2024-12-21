import React, { useState, useEffect } from "react";
import CartRow from "./CartRow";
import Button from "./Button";

function CartList({ products, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);

  useEffect(
    function () {
      setLocalCart(cart);
    },

    [cart]
  );

  function handleChange(productId, newValue) {
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }

  function handleUpdateCartClick() {
    updateCart(localCart);
  }

  function handleRemove(productId) {
    const newCart = { ...cart };

    delete newCart[productId];

    updateCart(newCart);
  }

  return (
    <div>
      <div className="hidden px-4 py-2 space-x-4 font-semibold bg-gray-100 border border-gray-300 sm:flex">
        <span className="flex-grow ml-28">Product</span>
        <span className="w-20">Price</span>
        <span className="w-32">Quantity</span>
        <span className="w-20">Subtotal</span>
      </div>
      {products.map((p) => {
        return (
          <CartRow
            key={p.id}
            product={p}
            quantity={localCart[p.id]}
            onQuantityChange={handleChange}
            onRemove={handleRemove}
          />
        );
      })}
      <div className="flex justify-end px-4 py-2 border border-gray-300">
        <Button onClick={handleUpdateCartClick} className="font-semibold ">
          Update Cart
        </Button>
      </div>
    </div>
  );
}

export default CartList;
