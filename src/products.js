import data from "./data";
import "./productList.css";

function Products() {
  const component = data.map((product) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <p>{product.category}</p>
      </div>
    );
  });
  return component;
}

function ProductsList() {
  return (
    <div className="productsList">
      <Products />
    </div>
  );
}

export default ProductsList;
