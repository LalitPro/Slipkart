import React from "react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-20 text-center bg-gray-100">
      <h1 className="m-5 text-2xl font-semibold text-rose-500 md:text-9xl">
        Work in Progress
      </h1>
      <Link
        to="/"
        className="p-5 m-5 bg-indigo-700 border shadow-xl hover:bg-slate-200 hover:text-indigo-700 rounded-3xl text-7xl text-slate-200"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Cart;
