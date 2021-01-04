import React from "react";

function Card({card}) {
    return (
        <div className="gallery-card">
            <div className="gallery-card-image-container">
                <img src={process.env.GATSBY_API_URL + card.image.url} alt={card.title} />
            </div>
            <div className="gallery-description">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
            </div>
        </div>
    )
}

export default Card;
