import React from "react";
import Product from "./Product";

function Categories({categories}) {
    return (
        <>
            {categories.map((category, i) =>
                (<div key={i}>
                    <ul>
                        <li className="category-title">
                            <h4>{category.title} <span>{category.description}</span></h4>
                        </li>
                        <li>
                            <ul>
                                {category.products.map((product, j) => (
                                    <Product product={product} key={j}/>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    {i === 4 ? <ul key="22"><li>{' '}</li></ul> : ''}
                </div>)
            )}
        </>
    )
}

export default Categories;
