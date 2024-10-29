import React from "react";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import NoFound from "./NoFound";
import ControlStrip from "./ControlStrip";

function App() {
  const path = window.location.pathname;
  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-gray-200">
      <NavBar />
      <Routes>
        <Route index element={<ProductListPage></ProductListPage>}></Route>
        <Route
          path="/Products/:id"
          element={
            <>
              <ControlStrip />
              <ProductDetail />
            </>
          }
        ></Route>
        <Route path="*" element={<NoFound />}></Route>
      </Routes>
      <NavBar />
    </div>
  );
}
export default App;
