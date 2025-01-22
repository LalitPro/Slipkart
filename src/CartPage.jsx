import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

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
      {products.length > 0 ? (
        <CartList products={products} cart={cart} updateCart={updateCart} />
      ) : (
        <div className="text-3xl md:text-5xl">
          <h1>No Products Found!</h1>
          <h1>Add Some Products!</h1>
          <Link
            to="/"
            className="flex items-center justify-center mt-10 text-indigo-500"
          >
            <RiArrowGoBackLine /> Go Back
          </Link>
        </div>
      )}{" "}
    </div>
  );
}

export default CartPage;
