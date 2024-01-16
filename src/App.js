import { useState } from "react";
import "./App.css";
import Categories from "./categories";
import ProductsList from "./products";

function App() {
  const [category, setCategory] = useState["All"];
  return (
    <div className="App">
      <Categories />
      <ProductsList />
    </div>
  );
}

export default App;
