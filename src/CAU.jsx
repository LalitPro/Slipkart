import React from "react";
import Button from "./Button";

function CAU() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-between w-full px-2 text-gray-700 bg-white border border-gray-300 shadow-2xl md:flex-row sm:px-10 sm:py-2">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-5 border-2"
          />
          <Button className="px-3 font-semibold bg-red-500 hover:bg-red-600">
            APPLY COUPON
          </Button>
        </div>
        <Button className="px-3 font-semibold bg-red-500 hover:bg-red-600">
          APPLY COUPON
        </Button>
      </div>
    </div>
  );
}
export default CAU;
