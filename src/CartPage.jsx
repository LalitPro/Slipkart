import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const productIds = Object.keys(cart);

  console.log(cart, productIds);

  useEffect(function () {
    setLoading(true);

    const myProductsPromises = productIds.map((id) => getProductData(id));

    Promise.all(myProductsPromises).then((products) => {
      setProducts(products);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl px-20 py-16 m-10 mx-auto bg-white border">
      <CartList products={products} cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default CartPage;
