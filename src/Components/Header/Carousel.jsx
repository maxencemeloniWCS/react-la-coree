import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HeaderCarousel({ data }) {
    return (
        <div id="slideshow">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                {data.slider.map(item => {
                    return (
                        <div key={item.id}>
                            <img
                                src={process.env.GATSBY_API_URL + item.image[0].url}
                                alt={item.image[0].name}
                            />
                            <div className="slider-title-container">
                                <p className="slider-title">{item.title}</p>
                                <p className="slider-subtitle">{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default HeaderCarousel;
