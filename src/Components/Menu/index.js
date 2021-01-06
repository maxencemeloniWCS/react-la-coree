import React, {useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Categories from './Categories';
import './Menu.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

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
    return (
        <section id="menu" className={isOpen ? 'open' : 'close'}>

            <h3>
                <span>M</span>enu
            </h3>
            <div className="wrapper">
                <Categories categories={data.strapiMenu.categories} />
            </div>
            {!isOpen ? <>
                <button>Voir</button>
            </> : ''}
        </section>
    );
}
export default Menu;
