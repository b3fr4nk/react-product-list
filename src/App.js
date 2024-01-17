import { useState } from "react";
import "./App.css";
import Categories from "./categories";
import ProductsList from "./products";

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <Categories setCategory={setCategory} category={category} />
      <ProductsList category={category} />
    </div>
  );
}

export default App;
