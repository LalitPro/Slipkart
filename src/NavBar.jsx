import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";

function NavBar({ productCount }) {
  const path = window.location.pathname;

  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl min-w-full gap-5 mx-auto">
        <Link to="/" className="mx-4 justify-self-start ">
          <img
            className="px-5 py-2 mx-5 duration-100 w-52 contrast-125 hover:scale-105 rounded-3xl"
            src="../images/logo.jpg"
          />
        </Link>
        <div className="flex">
          <Link
            to="/login/"
            className="relative flex items-center justify-center mx-4 justify-self-end "
          >
            <MdOutlineAccountCircle className="relative z-0 text-5xl text-red-500 justify-self-end sm:text-7xl hover:text-red-600" />
          </Link>
          <Link
            to="/cart/"
            className="relative flex items-center justify-center mx-4 justify-self-end "
          >
            <CiShoppingCart className="relative z-0 text-5xl text-red-500 justify-self-end sm:text-7xl hover:text-red-600" />

            <span className="absolute top-0 right-0 z-10 px-1 text-xs text-white bg-red-500 border-2 border-red-500 rounded-full md:px-2 md:text-xl hover:text-red-500 hover:bg-white">
              {productCount >= 0 ? productCount : 0}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
