import React from "react";
import Product from "./Product";

function Products({products}) {
    return (
        <ul>
            {products.map(product => <Product key={product.id} product={product} />)}
        </ul>
    )
}

export default Products;
