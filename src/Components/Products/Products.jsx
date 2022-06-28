import React from "react";
import products from "./Products.module.css";
import ProductsCars from "./ProductsCars/ProductsCars";

const Products = (props) => {
    let addRef = React.createRef()
    let addClick = () => {
        let text = addRef.current.value
        //-----------------------------------------//
        props.probData(text)
        //-----------------------------------------//

        addRef.current.value = ""
    }
    let addProdNew = props.prod.prod.map(item => <ProductsCars item={item.item}/>)
    return (
        <div className={products.products}>
            <div>
                <div className={products.blockText}>
                    <textarea ref={addRef} className={products.textarea}></textarea>
                    <button onClick={addClick} className={products.button}>push</button>
                </div>
                {addProdNew}
            </div>
        </div>
    );
};

export default Products;
