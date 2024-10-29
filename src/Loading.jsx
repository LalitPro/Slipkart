import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-2 text-4xl bg-gray-100 ">
      <ImSpinner9 className="text-7xl animate-spin" />
      Loading..
    </div>
  );
}

export default Loading;
