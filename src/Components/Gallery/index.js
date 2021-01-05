import React, { useEffect, useState } from 'react';
import './style.css';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
    }, []);

    return (
        <section id="gallery">
            {isLoading ? (
                ''
            ) : (
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={10}
                    totalSlides={cards.length}
                    visibleSlides={4}
                    isPlaying={true}
                    infinite={true}
                    interval={5000}
                >
                    <Slider>
                        <>
                            {cards.map((card, i) => (
                                <Slide index={i} key={i}>
                                    <Image src={process.env.GATSBY_API_URL + card.image.formats.small.url} />
                                    <p>{card.title}</p>
                                </Slide>
                            ))}
                        </>
                    </Slider>
                    <ButtonBack className="gallery-arrow" id="arrow-left">
                        <i className="fa fa-chevron-left" />
                    </ButtonBack>
                    <ButtonNext className="gallery-arrow" id="arrow-right">
                        <i className="fa fa-chevron-right" />
                    </ButtonNext>
                </CarouselProvider>
            )}
        </section>
    );
}

export default Gallery;
