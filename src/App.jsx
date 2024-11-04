import React from "react";
import ProductListPage from "./ProductListPage";
import ProductDetail from "./ProductDetail";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
