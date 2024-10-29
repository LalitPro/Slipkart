import Table from "./Table";

function App() {
  console.log("App function running");

  return (
    <div className="flex flex-wrap gap-3">
      <Table></Table>
      <Table></Table>
    </div>
  );
}
export default App;
