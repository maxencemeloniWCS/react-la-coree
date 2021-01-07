import React from "react";
import Markdown from "react-markdown";

function LeftSide({title, description}) {
    return (
        <div className="about-side" id="about-left">
            <div>
                <h3>{title}</h3>

                <Markdown>{description}</Markdown>

            </div>
        </div>
    )
}

export default LeftSide;
