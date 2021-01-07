import React, {useContext} from 'react';
import Nav from './Nav';
import ContactBar from './ContactBar';
import './Header.css';
import {graphql, useStaticQuery} from 'gatsby';
import Carousel from './Carousel';
import {Context} from '../../context/Context';

function Header({modalIsOpen, setModalIsOpen}) {
    const {settings} = useContext(Context);

    const data = useStaticQuery(graphql`
        {
            strapiSlideshow {
                slider {
                    image {
                        url
                        name
                    }
                    subtitle
                    title
                    id
                }
            }
        }
    `);

    return (
        <section id="header">
            <div id="header-elems">
                <Nav
                    data={settings}
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
            </div>
            <ContactBar data={settings} />
            <Carousel data={data.strapiSlideshow} />
        </section>
    );
}

export default Header;
