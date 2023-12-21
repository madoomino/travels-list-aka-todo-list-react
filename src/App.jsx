import { useState } from "react";
import AddForm from "./ui/components/AddForm";
import ListItems from "./ui/components/ListItems";
import Stats from "./ui/components/Stats";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <h1>Far Away</h1>
      <AddForm items={items} setItems={setItems} />
      <ListItems items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
