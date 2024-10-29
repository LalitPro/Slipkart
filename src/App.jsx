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
         <Route
          path="/Cart/"
          element={
          
                 <div className="flex flex-col items-center justify-center h-screen p-20 text-center bg-gray-100">
      <h1 className="m-5 font-semibold text-rose-500 text-2xl md:text-9xl">
        Work in Progress
      </h1>
      <Link
        to="/"
        className="p-5 m-5 bg-indigo-700 border shadow-xl hover:bg-slate-200 hover:text-indigo-700 rounded-3xl text-7xl text-slate-200"
      >
        Go Back
      </Link>
    </div>
          }
        ></Route>
        <Route path="*" element={<NoFound />}></Route>
      </Routes>
      <NavBar />
    </div>
  );
}
export default App;
