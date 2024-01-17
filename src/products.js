import data from "./data";
import "./productList.css";

function Products(props) {
  const { category } = props;
  // console.log(category);
  const component = data
    .filter((item) => {
      return item.category === category || category === "All";
    })
    .map((product) => {
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

function ProductsList(props) {
  const { category } = props;
  return (
    <div className="productsList">
      <Products category={category} />
    </div>
  );
}

export default ProductsList;
