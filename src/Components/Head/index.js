import React from 'react';
import Nav from './Nav';
import ContactBar from './ContactBar';
import './Head.css';
import {graphql, useStaticQuery} from 'gatsby';
import HeadCarousel from './HeadCarousel';

function Header() {
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
        <section id='header'>
            <div id='header-elems'>
                <Nav />
                <ContactBar />
            </div>
            <HeadCarousel data={data} />
        </section>
    );
}

export default Header;
