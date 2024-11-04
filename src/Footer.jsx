import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

function Footer() {
  return (
    <div className="text-sm md:text-md flex items-center p-4 bg-white justify-evenly">
      <p>© All Rights Reserved 2024.</p>
      <p className="text-md md:text-xl">
        This Website is maded by Lalit Yadav.
      </p>
    </div>
  );
}

export default Footer;
