import { categoriesAndCount } from "./data";
import { useState } from "react";

function Categories(props) {
  const component = categoriesAndCount.map((category) => {
    return <button id="{category.name}">{category.name}</button>;
  });
  return component;
}

export default Categories;
