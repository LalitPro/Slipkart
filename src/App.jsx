import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import ControlStrip from "./ControlStrip";
import CartPage from "./CartPage";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import Alert from "./Alert";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
  }

  const totalCount = Object.keys(cart).reduce(
    (prev, current) => prev + cart[current],
    0
  );

  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-gray-300">
      <NavBar productCount={totalCount} />

      <div className="flex-grow bg-gray-100">
        <UserProvider>
          <AlertProvider>
            <Alert />

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
                path="/login"
                element={
                  <>
                    <Login />
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <AuthRoute>
                    <SignUp />
                  </AuthRoute>
                }
              />
              <Route
                path="/Cart"
                element={
                  <UserRoute>
                    <CartPage cart={cart} updateCart={updateCart} />
                  </UserRoute>
                }
              />
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
          </AlertProvider>
        </UserProvider>
      </div>

      <Footer className="self-end" />
    </div>
  );
}

export default App;
