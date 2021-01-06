import React, {useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Categories from './Categories';
import './Menu.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

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
            <div className="gradientBack">
                <button
                    type="button"
                    className="displayMenuButton"
                    onClick={handleClick}
                >
                    {isOpen ? 'Masquer le menu' : 'Afficher le menu'}
                </button>
            </div>
        </section>
    );
}
export default Menu;
