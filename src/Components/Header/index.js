import React from 'react';
import Nav from './Nav';
import ContactBar from './ContactBar';
import './Header.css';
import {graphql, useStaticQuery} from 'gatsby';
import Carousel from './Carousel';

function Header({modalIsOpen, setModalIsOpen}) {
    const data = useStaticQuery(graphql`
        {
            strapiSettings {
                title
                address
                phone
                socialmedia {
                    facebook
                    tripadvisor
                }
            }
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
                    data={data.strapiSettings}
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
            </div>
            <ContactBar data={data.strapiSettings} />
            <Carousel data={data.strapiSlideshow} />
        </section>
    );
}

export default Header;
