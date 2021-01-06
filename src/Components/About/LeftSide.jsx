import React from "react";
import Markdown from "react-markdown";

function LeftSide({title, description}) {
    return (
        <div className="about-side" id="about-left">
            <div>
                <h3>{title}</h3>
                <p><Markdown>{description}</Markdown></p>
            </div>
        </div>
    )
}

export default LeftSide;
