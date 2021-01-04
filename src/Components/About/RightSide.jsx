import React from "react";

function RightSide({image}) {
    return (
        <div className="about-side" id="about-right">
            <img src={process.env.GATSBY_API_URL + image} alt=""/>
        </div>
    )
}

export default RightSide
