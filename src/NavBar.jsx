import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

function NavBar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl min-w-full gap-5 mx-auto">
        <Link to="/" className="mx-4 justify-self-start ">
          <img
            className="h-8 mx-5 sm:h-16 hover:contrast-150"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          />
        </Link>{" "}
        <Link
          to="/cart/"
          className="relative flex items-center justify-center mx-4 justify-self-end "
        >
          <CiShoppingCart className="relative z-0 text-4xl text-red-500 justify-self-end sm:text-7xl hover:text-red-600" />
          <span className="absolute z-10 ml-1 text-xl text-red-500">
            {productCount}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
