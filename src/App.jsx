import React, { createContext, useEffect, useState } from "react";
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
<<<<<<< HEAD
import AlertProvider from "./Providers/AlertProvider";
import UserProvider from "./Providers/UserProvider";
import Alert from "./Alert";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
=======
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
import Alert from "./Alert";
import { UserContext, AlertContext } from "./Contexts";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
>>>>>>> 0f75e58 (login)

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const path = window.location.pathname;

  const [cart, setCart] = useState(savedData);

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
<<<<<<< HEAD
      <NavBar productCount={totalCount} />
      {loadingUser ? (
        <Loading />
      ) : (
        <div className="flex-grow bg-gray-100">
          <Routes>
            <Route
              index
              element={
                <>
                  <ProductListPage></ProductListPage>
                </>
              }
            ></Route>
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
=======
      <UserProvider>
        <AlertProvider>
          <NavBar productCount={totalCount} />

          <Alert />

          <div className="flex-grow bg-gray-100">
            <Routes>
              <Route
                index
                element={
                  <UserRoute>
                    <ProductListPage />
                  </UserRoute>
                }
              />
              <Route
                path="/Products/:id"
                element={
                  <UserRoute>
                    <ControlStrip />
                    <ProductDetail onAddToCart={handleAddToCart} />
                  </UserRoute>
                }
              />
              <Route
                path="/login/"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/signup/"
                element={
                  <AuthRoute>
                    <SignUp />
                  </AuthRoute>
                }
              />
              <Route
                path="/Cart/"
                element={
                  <UserRoute>
                    <CartPage cart={cart} updateCart={updateCart} />
                  </UserRoute>
                }
              />
              <Route path="/test/" element={<Test />} />
              <Route
                path="/me"
                element={
                  <UserRoute>
                    <Dashboard />
                  </UserRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer className="self-end" />
        </AlertProvider>
      </UserProvider>
>>>>>>> 0f75e58 (login)
    </div>
  );
}

export default App;
