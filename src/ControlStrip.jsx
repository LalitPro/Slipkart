import React from "react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

function ControlStrip() {
  return (
    <div className="flex items-center justify-end px-5 py-2 bg-slate-100">
      <Link
        to="/"
        className="flex items-center justify-center p-2 px-5 text-4xl text-white bg-indigo-300 rounded-full hover:bg-white hover:text-indigo-300"
      >
        <HiArrowSmLeft />
      </Link>
    </div>
  );
}

export default ControlStrip;
