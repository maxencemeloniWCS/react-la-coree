import React from 'react';
import Nav from './Nav';
import ContactBar from './ContactBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { graphql, useStaticQuery } from 'gatsby';
import HeadCarousel from './HeadCarousel';

function Header() {
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
                <Nav data={data.strapiSettings} />
                <ContactBar data={data.strapiSettings} />
            </div>
            <HeadCarousel data={data.strapiSlideshow} />
        </section>
    );
}

export default Header;
