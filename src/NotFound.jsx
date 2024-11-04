import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-gray-100 sm:p-10 md:p-20">
      <h1 className="m-2 text-5xl font-semibold sm:m-5 text-rose-500 sm:text-7xl md:text-9xl">
        Page Not Found
      </h1>
      <Link
        to="/"
        className="p-5 m-1 text-3xl bg-indigo-700 border shadow-xl sm:m-5 hover:bg-slate-200 hover:text-indigo-700 rounded-3xl sm:text-5xl mdtext-7xl text-slate-200"
      >
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
