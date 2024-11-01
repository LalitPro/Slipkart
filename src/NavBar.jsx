import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

function NavBar() {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl min-w-full gap-5 mx-auto">
        <Link to="/" className="mx-4 justify-self-start ">
          <img
            className="h-8 mx-5 sm:h-16 hover:contrast-150"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          />
        </Link>{" "}
        <Link to="/cart/" className="mx-4 justify-self-end ">
          <HiShoppingBag className="text-4xl text-red-500 justify-self-end sm:text-7xl hover:text-red-600" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
