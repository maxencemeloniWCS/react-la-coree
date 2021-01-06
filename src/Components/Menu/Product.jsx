import React from "react";

function Product({product}) {
    return (
        <li>
            <span>
                <span>{product.title}</span>
                <span className="price">{product.price && product.price+' €'}</span>
            </span>
            <span>{product.description}</span>
        </li>
    )
}


export default Product;
