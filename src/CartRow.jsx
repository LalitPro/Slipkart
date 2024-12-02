import React, { useEffect, useState } from "react";
import {ImCross} from "react-icons/im";

function CartRow({ product, quantity }) {

  return (<div className="flex flex-row items-center space-x-4 px-4 py-2 border border-gray-300">
            <ImCross />
            <div>
              <img className="w-full h-full object-cover" src={product.thumbnail} />
            </div>
            <h3>{product.title}</h3>
            <span>${product.price}</span>
            <input type="number" value={quantity} className="w-12 p-1 mx-2 rounded-md border border-gray-300" />
            <span>${product.price * quantity}</span>
  </div>);
}
export default CartRow;
