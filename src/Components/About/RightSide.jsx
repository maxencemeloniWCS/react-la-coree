import React from "react";

const API_URL = 'http://localhost:1337';

function RightSide({image}) {
    return (
        <div className="about-side" id="about-right">
            <img src={API_URL+image} alt=""/>
        </div>
    )
}

export default RightSide
