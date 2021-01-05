import React from "react";
import Product from "./Product";

function Products({products}) {
    return (
        <ul>
            {products.map((product, i) => <Product key={i} product={product} />)}
        </ul>
    )
}

export default Products;
