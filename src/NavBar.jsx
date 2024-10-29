import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

function NavBar() {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <Link to="/">
          <img
            className="h-16"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          />
        </Link>
        <Link to="/cart/">
          <HiShoppingBag className="text-7xl" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
