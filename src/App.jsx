import React, { useEffect, useState } from "react";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ControlStrip from "./ControlStrip";
import CartPage from "./CartPage";
import Login from "./Login";
import SignUp from "./SignUp";
import Test from "./test";
import "swiper/css";
import Dashboard from "./Dashboard";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const path = window.location.pathname;

  const [cart, setCart] = useState(savedData);

  const [user, setUser] = useState();

  const [loadingUser, setLoadingUser] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((respone) => {
          setUser(respone.data);
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
  }, []);

  console.log("user is: ", user);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  function handleSetToCart(productId, count) {
    const newCart = { ...cart, [productId]: count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return +previous + +cart[current];
  }, 0);
  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-gray-300">
      <NavBar productCount={totalCount} />
      {loadingUser ? (
        <Loading />
      ) : (
        <div className="flex-grow bg-gray-100">
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
            <Route
              path="/login/"
              element={<Login user={user} setUser={setUser} />}
            ></Route>
            <Route
              path="/signup/"
              element={<SignUp user={user} setUser={setUser} />}
            ></Route>
            <Route
              path="/Cart/"
              element={<CartPage cart={cart} updateCart={updateCart} />}
            ></Route>
            <Route path="/test/" element={<Test />}></Route>
            <Route
              path="/me"
              element={<Dashboard user={user} setUser={setUser} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      )}
      <Footer className="self-end" />
    </div>
  );
}
export default App;
