import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex items-center justify-center flex-grow gap-4 text-5xl bg-gray-100 md:text-7xl ">
      <ImSpinner9 className="animate-spin text-7xl md:text-9xl " />
      <h1>
        {" "}
        Loading..<span className="inline animate-pulse">.</span>
        <span className="inline animate-pulse">.</span>
        <span className="inline animate-pulse">.</span>
      </h1>
    </div>
  );
}

export default Loading;
