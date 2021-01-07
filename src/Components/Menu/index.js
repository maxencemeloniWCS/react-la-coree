import React, {useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Categories from './Categories';
import './Menu.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
        let top = document.getElementById(
            e.target.getAttribute('data-link').replace('#', '')
        ).offsetTop + 100;
        window.scrollTo({top, behavior: 'smooth'});
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
                    className="displayMenuButton"
                    onClick={handleClick}
                    data-link="#menu"
                >
                    {isOpen ? 'Masquer' : 'Afficher'} le menu
                </button>
            </div>
        </section>
    );
}
export default Menu;
