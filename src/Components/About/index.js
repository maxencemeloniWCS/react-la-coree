import React, {useEffect, useState} from 'react';
import { graphql, useStaticQuery } from "gatsby";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function About() {

    const [isLoading, setIsLoading] = useState(true);
    const [about, setAbout] = useState(null);

    const data = useStaticQuery(graphql`
        query QueryAbout   {
    strapiAbout {
      title
      description
      image {
        url
        formats {
          thumbnail {
            url
            height
            width
          }
        }
      }
    }
  }
  `);
    console.log(data);





    useEffect(() => {
        fetch(process.env.GATSBY_API_URL + '/abouts')
            .then(res => res.json())
            .then(res => {
                setAbout(res[0]);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [])


    return (<section id="about">
        <div className="wrapper">
            {isLoading ? '' :
                <div>
                    <LeftSide title={about.title} description={about.description}/>
                    <RightSide image={about.image.url}/>
                </div>
            }
        </div>
    </section>)

}

export default About;

