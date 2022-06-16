import React from "react";
import products from "./Products.module.css"
import ProductsCars from "./ProductsCars/ProductsCars";

const Products = () =>{
    let titlePage = "Products"
    const yaerCar = Math.round(Math.random() *10000)
    return(
        <div className={products.products}>
            <ProductsCars name={"bmw"} year={yaerCar} titlePage={titlePage}/>
            <ProductsCars name={"mazda"} year={yaerCar}/>
        </div>
    )
}

export default Products