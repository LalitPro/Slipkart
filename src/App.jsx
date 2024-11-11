import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ControlStrip from "./ControlStrip";
import Cart from "./Cart";

function App() {
  const path = window.location.pathname;

  const [cart, setCart] = useState({});

  console.log("cart is ", cart);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    setCart({ ...cart, [productId]: oldCount + count });
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-gray-200">
      <NavBar productCount={totalCount} />
      <Routes>
        <Route index element={<ProductListPage></ProductListPage>}></Route>
        <Route
          path="/Products/:id"
          element={
            <>
              <ControlStrip />
              <ProductDetail onAddToCart={handleAddToCart} />
            </>
          }
        ></Route>
        <Route path="/Cart/" element={<Cart />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
