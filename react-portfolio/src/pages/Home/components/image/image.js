import React from "react";
import Me from "./Toby.jpg"

function Image() {
    return (
        <div className="container">
            <img alt="Me" src={ Me } className="me"></img>
        </div>
    )
}

export default Image;