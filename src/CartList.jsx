import React from "react";
import CartRow from "./CartRow";

function CartList({ products, cart }) {

return (<div>
          <div>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
          </div>
          {products.map((p)=>{
                 return <CartRow product={p} quantity={cart[p.id]} />
          })}
</div>);
}

export default CartList;
