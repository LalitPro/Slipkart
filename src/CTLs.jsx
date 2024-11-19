import React from "react";
import Button from "./Button";

function CTLs() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-center gap-2 my-10 ml-auto mr-0 text-gray-700 bg-white border border-gray-300 shadow-2xl w-96 ">
        <h2 className="w-full p-3 text-xl font-bold text-left border border-gray-300 bg-gray-50">
          Cart Tools
        </h2>
        <div className="flex flex-col items-start justify-center w-full gap-4 p-4">
          <div className="flex w-full gap-10 py-2 border-b-2 border-gray-300">
            <h3 className="font-semibold">Subtotal</h3>
            <h3 className="font-semibold">$99999</h3>
          </div>
          <div className="flex w-full gap-10 py-2 border-b-2 border-gray-300">
            <h3 className="font-semibold">Subtotal</h3>
            <h3 className="font-semibold">$99999</h3>
          </div>
          <Button className="w-full px-3 font-semibold bg-red-500 hover:bg-red-600">
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CTLs;
