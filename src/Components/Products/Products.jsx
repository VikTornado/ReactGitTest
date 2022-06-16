import React from "react";
import products from "./Products.module.css"

const Products = () =>{
    return(
        <div className={products.products}>
            <h2 className={products.title}>products</h2>
            <p>{Math.round(Math.random() *100)}</p>
        </div>
    )
}

export default Products