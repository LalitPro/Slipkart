import React from "react";
import CartRow from "./CartRow";

function CartList({ products, cart }) {

return (<div>
          <div></div>
          {products.map((product)=>{
                 return <CartRow product={product} />
          })}
</div>);
}

export default CartList;
