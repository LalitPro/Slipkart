import React from "react";

function NoMatching({ children }) {
  return (
    <div className="w-full p-5 m-1 text-4xl text-center px-60 sm:text-7xl text-sky-400 bg-slate-50">
      {children}
    </div>
  );
}

export default NoMatching;
