import React, { useEffect, useState } from "react"
import Nav from "./Nav"
import Title from "./Title"
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
          console.log(item)
          setImages(prev => [...prev, item.image])
          setTitle(prev => [...prev, item.title])
          setSubtitle(prev => [...prev, item.subtitle])
        })
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(images)
    console.log(title)
    console.log(subtitle)
  }, [images, title, subtitle])

  return (
    <section id="header">
      <div>
        <Nav />
        <ContactBar />
      </div>
      <div className="background">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {images.map((image, i) => {
            return (
              <div>
                <img
                  src={process.env.GATSBY_API_URL + image.url}
                  alt={image.name}
                  style={{ height: "500px" }}
                />
                <p style={{ marginBottom: "50px" }} className="legend">
                  {title[i]}
                </p>
                <p className="legend">{subtitle[i]}</p>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default Header
