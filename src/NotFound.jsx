import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col rounded-3xl items-center justify-center h-screen p-2 text-center bg-white sm:p-5 md:p-10">
      <img src="/PageNotFound.png" className="w-96 md:w-1/2" />
      <h1 className="m-2 text-3xl font-semibold sm:m-5 text-rose-500 sm:text-5xl md:text-7xl">
        Page Not Found
      </h1>
      <Link
        to="/"
        className="p-5 m-1 text-3xl bg-red-500 border shadow-xl sm:m-5 hover:bg-slate-200 hover:text-red-500 rounded-3xl sm:text-5xl mdtext-7xl text-slate-200"
      >
        Go Back
      </Link>
    </div>
  );
}

export default NotFound;
