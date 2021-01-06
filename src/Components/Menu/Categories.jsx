import React from "react";
import Product from "./Product";

function Categories({categories}) {
    return (
        <>
            {categories.map((category, i) =>
                (<>
                    <ul key={i}>
                        <li className="category-title">
                            <h4>{category.title} <span>{category.description}</span></h4>
                        </li>
                        <li>
                            <ul>
                                {category.products.map((product, j) => (
                                    <Product product={product} hey={j}/>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    {i === 4 ? <ul><li>{' '}</li></ul> : ''}
                </>)
            )}
        </>
    )
}

export default Categories;
