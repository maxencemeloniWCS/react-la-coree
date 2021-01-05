import React from 'react';
import Nav from './Nav';
import ContactBar from './ContactBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
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
