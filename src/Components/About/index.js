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
                    formats {
                        small {
                            url
                        }
                    }
                }
            }
        }
    `);

    return (
        <section id="about">
            <div className="wrapper">
                <div>
                    <LeftSide title={data.strapiAbout.title} description={data.strapiAbout.description} />
                    <RightSide image={data.strapiAbout.image[0].formats.small.url} />
                </div>
            </div>
        </section>
    );
}

export default About;