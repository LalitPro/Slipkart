import { useState } from "react";
import Table from "./Table";

function App() {
  console.log("App function running");

  const [flip, setFlip] = useState(false);

  let key1 = "table1";
  let key2 = "table2";

  if (flip) {
    key1 = "table2";
    key2 = "table1";
  }
  function flipKey() {
    setFlip(!flip);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Table key={key1}></Table>
      <Table key={key2}></Table>
      <button
        className="px-4 py-1 text-white bg-indigo-700 rounded-md"
        onClick={flipKey}
      >
        Flip
      </button>
    </div>
  );
}
export default App;
