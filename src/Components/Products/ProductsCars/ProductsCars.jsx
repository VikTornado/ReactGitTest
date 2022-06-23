import React from "react";
import productsName from "./ProductsCars.module.css";
import products from "../Products.module.css";

const ProductsCars = (props) => {
    // console.log(props);
    return (
        <div>
            <div className={products.block}>
            </div>
            <div className={productsName.link}>
                <ul className={productsName.link}>
                    <div className={productsName.item}>
                        <li className={productsName.item}>{props.item}</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default ProductsCars;
