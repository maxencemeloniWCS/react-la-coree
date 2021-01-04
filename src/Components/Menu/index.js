import React, {useState, useEffect} from 'react';
import Products from "./products";

function Menu() {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(process.env.GATSBY_API_URL+'/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [])

    return (<section id="menu">
        <h3><span>M</span>enu</h3>
        <div className="wrapper">
            {isLoading ? <p>loading...</p> : <Products products={products}/>}
        </div>
    </section>)

}
export default Menu;

