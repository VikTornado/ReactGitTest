import React from "react";
import products from "./Products.module.css"

const Products = () =>{
    return(
        <div className={products.products}>
            <h2 className={products.title}>products</h2>
        </div>
    )
}

export default Products