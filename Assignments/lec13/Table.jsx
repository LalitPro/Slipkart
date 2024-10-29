import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  let [num, updateNum] = useState(2);
  let [upto, setUpto] = useState(10);

  let rows = [];

  for (let i = 1; i <= upto; i++) {
    rows.push(<TableRow number={num} index={i} />);
  }

  function handleNumChange(event) {
    console.log("handeNumChange function called");

    const newNum = +event.target.value;
    updateNum(newNum);
  }
  function handleUptoChange(event) {
    console.log("handeUptoChange function called");

    const newNum = +event.target.value;
    setUpto(newNum);
  }

  console.log(`num is ${num} upto is ${upto}`);

  return (
    <div className="p-2 m-10 border shadow-2xl">
      {num > 20 ? (
        <div className="p-1 m-1 border border-green-500">
          Nice Job! {num} tak pohoonch gaye
        </div>
      ) : (
        <div className="p-1 m-1 border border-red-500">
          Kya kar rahe ho!{num} tak hi pohoonche bus
        </div>
      )}
      <div className="flex flex-col mb-1">
        <input
          onChange={handleNumChange}
          className="mb-1 border border-gray-700 rounded-md"
          type="number"
          value={num}
        />
        <input
          onChange={handleUptoChange}
          className="border border-gray-700 rounded-md"
          type="number"
          value={upto}
        />
      </div>
      {rows}
    </div>
  );
}

export default Table;
