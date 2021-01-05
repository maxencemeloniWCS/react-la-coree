import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Products from "./products";

function Menu() {
    const data = useStaticQuery(graphql`
    query Products {
      allStrapiProducts {
        nodes {
          description
          price
          title
        }
      }
    }
  `);
    return (<section id="menu">
        <h3><span>M</span>enu</h3>
        <div className="wrapper">
            <Products products={data.allStrapiProducts.nodes}/>
        </div>
    </section>)

}
export default Menu;

