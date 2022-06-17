import React from "react";
import productsName from "./ProductsCars.module.css";

const ProductsCars = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className={productsName.h1}>{props.titlePage}</h1>
      <h2 className={productsName.title}>Cars name: {props.name}</h2>
      <p className={productsName.namber}>Namber: {props.year}</p>
    </div>
  );
};

export default ProductsCars;
