import { useState } from "react";
import AddForm from "./ui/components/AddForm";
import ListItems from "./ui/components/ListItems";
import Stats from "./ui/components/Stats";
import TravelsContext from "./context/context";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <h1>Far Away</h1>
      <TravelsContext.Provider value={{ items, setItems }}>
        <AddForm />
        <ListItems />
        <Stats />
      </TravelsContext.Provider>
    </div>
  );
}

export default App;
