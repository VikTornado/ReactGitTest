import React from "react";
import products from "./Products.module.css";
import ProductsCars from "./ProductsCars/ProductsCars";

const Products = (props) => {
  let titlePage = "Products";
  // const yaerCar = Math.round(Math.random() *10000)

  const carName = {
    name: [{ name: "bmw" }, { name: "volvo" }, { name: "audi" }],
    years: [
      { year: Math.round(Math.random() * 10000) },
      { year: Math.round(Math.random() * 10000) },
      { year: Math.round(Math.random() * 10000) },
    ],
  };
  return (
    <div className={products.products}>
      <ProductsCars
        name={carName.name[0].name}
        year={carName.years[0].year}
        titlePage={titlePage}
      />
      <ProductsCars name={carName.name[1].name} year={carName.years[1].year} />
      <ProductsCars name={carName.name[2].name} year={carName.years[2].year} />
      <button onChange={""}>push</button>
    </div>
  );
};

export default Products;
