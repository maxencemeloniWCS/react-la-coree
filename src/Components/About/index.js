import React, {useEffect, useState} from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function About() {

    const [isLoading, setIsLoading] = useState(true);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        fetch(process.env.GATSBY_API_URL + '/abouts')
            .then(res => res.json())
            .then(res => {
                console.log(res)
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

