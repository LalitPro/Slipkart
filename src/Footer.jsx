import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";

function Footer() {
  return (
    <div className="flex flex-col items-center p-4 text-sm bg-white md:text-md md:flex-row justify-evenly">
      <p>© All Rights Reserved 2024.</p>
      <p className="text-md md:text-xl">
        This Website is maded by Lalit Yadav.
      </p>
    </div>
  );
}

export default Footer;
