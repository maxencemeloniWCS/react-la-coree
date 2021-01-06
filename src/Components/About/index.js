import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './About.css';

function About() {
    const data = useStaticQuery(graphql`
        query About {
            strapiAbout {
                title
                description
                image {
                    url
                }
            }
        }
    `);

    return (
        <section id="about">
            <div className="wrapper">
                <div>
                    <LeftSide title={data.strapiAbout.title} description={data.strapiAbout.description} />
                    <RightSide image={data.strapiAbout.image[0].url} />
                </div>
            </div>
        </section>
    );
}

export default About;
