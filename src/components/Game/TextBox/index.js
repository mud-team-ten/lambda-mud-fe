import React from "react";
import "nes.css/css/nes.min.css"

function TextBox(props) {
    return(
        <div className="textbox-wrapper">
            <div className="nes-container with-title">
                <p className="title">{props.info.title}</p>
                <p>{props.info.description}</p>
            </div>
        </div>
    )
}

export default TextBox