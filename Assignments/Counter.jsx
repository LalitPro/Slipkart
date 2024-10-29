import { useState } from "react";

function Counter() {
  let [num, updateNum] = useState(0);

  function changeNum() {
    updateNum(num + 1);
  }

  return (
    <div className="flex flex-col items-center content-center h-screen gap-12 bg-gray-50 pt-60">
      <h1 className="p-5 text-5xl text-indigo-500 bg-gray-100">
        You Have Clicked <span className="font-bold">{num}</span> times.
      </h1>
      <button
        onClick={changeNum}
        className="block text-white bg-indigo-700 border-4 border-indigo-700 hover:bg-gray-50 hover:text-indigo-700 py-7 px-96 text-7xl"
      >
        Click Me
      </button>
    </div>
  );
}
export default Counter;
