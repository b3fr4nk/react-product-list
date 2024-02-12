import data from "./data";
import "./productList.css";

function Products(props) {
  const { category } = props;
  const component = data
    .filter((item) => {
      return item.category === category || category === "All";
    })
    .map((product) => {
      return (
        <div className="product">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <p>{product.category}</p>
        </div>
      );
    });
  return component;
}

function ProductsList(props) {
  const { category } = props;
  const totalCost = data.reduce((total, item) => {
    const price = parseFloat(item.price.slice(1));
    return total + price;
  }, 0);
  return (
    <div className="productsList">
      <Products category={category} />
      <p>${totalCost.toFixed(2)}</p>
    </div>
  );
}

export default ProductsList;
