import React from "react";

function LeftSide({title, description}) {
    return (
        <div className="about-side" id="about-left">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default LeftSide;
