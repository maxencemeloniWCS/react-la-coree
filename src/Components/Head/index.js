import React, { useEffect, useState } from "react"
import Nav from "./Nav"
import ContactBar from "./ContactBar"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

function Header() {
  const [images, setImages] = useState([])
  const [title, setTitle] = useState([])
  const [subtitle, setSubtitle] = useState([])

  useEffect(() => {
    fetch(process.env.GATSBY_API_URL + "/slideshow")
      .then(res => res.json())
      .then(res => res.slider)
      .then(res => {
        res.map(item => {
          setImages(prev => [...prev, item.image])
          setTitle(prev => [...prev, item.title])
          setSubtitle(prev => [...prev, item.subtitle])
        })
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <section id="header">
      <div id="header-elems">
        <Nav />
        <ContactBar />
      </div>
      <div id="slideshow">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          dynamicHeight={true}
        >
          {images.map((image, i) => {
            return (
              <div>
                <img
                  src={process.env.GATSBY_API_URL + image.url}
                  alt={image.name}
                  style={{ height: "inherit" }}
                />
                <div className="slider-title-container">
                    <p className="slider-title">
                      {title[i]}
                    </p>
                    <p className="slider-subtitle">{subtitle[i]}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Header
