import { categoriesAndCount } from "./data";
import "./CategoryList.css";
function Categories(props) {
  const component = categoriesAndCount.map((category) => {
    const className = category.name === props.category ? "selected" : "";
    return (
      <button
        id={category.name}
        className={className}
        onClick={() => {
          console.log(category.name);
          props.setCategory(category.name);
        }}
      >
        {category.name}
      </button>
    );
  });
  const allSelected = "All" === props.category ? "selected" : "";
  component.push(
    <button
      id="All"
      className={allSelected}
      onClick={() => {
        console.log("All");
        props.setCategory("All");
      }}
    >
      All
    </button>
  );
  return component;
}

export default Categories;
