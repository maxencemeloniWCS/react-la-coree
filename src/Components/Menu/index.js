import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Categories from "./Categories";
import "./Menu.css";

function Menu() {
    const data = useStaticQuery(graphql`
    query Menu {
      strapiMenu {
        categories {
            title
            description
            products {
                title
                description
                price
            }
        } 
      }
    }
  `);
    return (<section id="menu">
        <h3><span>M</span>enu</h3>
        <div className="wrapper">
            <Categories categories={data.strapiMenu.categories}/>
        </div>
    </section>)

}
export default Menu;

