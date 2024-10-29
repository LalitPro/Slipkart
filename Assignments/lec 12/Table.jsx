import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, updateNum] = useState(2);

  function nextTable() {
    console.log("nextTable function is called");

    updateNum(num + 1);
  }
  return (
    <div className="p-2 m-10 border shadow-2xl">
      <button
        onClick={nextTable}
        className="px-4 py-1 text-white bg-indigo-700 rounded-md"
      >
        Next
      </button>
      <TableRow number={num} index={1} />
      <TableRow number={num} index={2} />
      <TableRow number={num} index={3} />
      <TableRow number={num} index={4} />
    </div>
  );
}

export default Table;
