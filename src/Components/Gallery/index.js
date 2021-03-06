import React, {useEffect, useContext} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Context} from '../../context/Context';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image,
} from 'pure-react-carousel';
import './Gallery.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Gallery() {
    const {isMobile, checkIsMobile} = useContext(Context);

    const data = useStaticQuery(graphql`
        {
            strapiGallery {
                slider {
                    image {
                        formats {
                            small {
                                url
                            }
                        }
                    }
                    title
                }
            }
        }
    `);

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, [checkIsMobile]);

    return (
        <section id="gallery">
            <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={10}
                totalSlides={data.strapiGallery.slider.length}
                visibleSlides={isMobile ? 2 : 4}
                isPlaying={true}
                infinite={true}
                interval={5000}
            >
                <Slider>
                    <>
                        {data.strapiGallery.slider.map((img, i) => (
                            <Slide index={i} key={i}>
                                <Image
                                    src={
                                        process.env.GATSBY_API_URL +
                                        img.image[0].formats.small.url
                                    }
                                />
                                <p>{img.title ?? ''}</p>
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
        </section>
    );
}

export default Gallery;
