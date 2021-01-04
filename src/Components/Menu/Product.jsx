import React from "react";

function Product({product}) {
    return (
        <li>
            <span>
                <strong>{product.title}</strong>
                <span>{product.description}</span>
            </span>
            <span className="price">{product.price} €</span>
        </li>
    )
}


export default Product;
