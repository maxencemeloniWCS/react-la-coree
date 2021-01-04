import React, {useEffect, useState} from 'react';
import Card from "./Card";

function Gallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState(null);
    useEffect(() => {
        fetch(process.env.GATSBY_API_URL + '/gallery')
            .then(res => res.json())
            .then(res => {
                setCards(res.slider);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [])



    return (
        <section id="gallery">
        <div className="gallery-arrow" id="arrow-left"><i className="fa fa-chevron-left"/></div>
        <div className="gallery-arrow" id="arrow-right"><i className="fa fa-chevron-right"/></div>
        <div id="gallery-wrapper">
            {isLoading ? '' :
                cards.map(card => <Card card={card} key={card.id}/>)
            }
        </div>
    </section>)

}

export default Gallery;

