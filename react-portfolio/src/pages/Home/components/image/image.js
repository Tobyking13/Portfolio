import React from "react";
import Me from "./Toby.jpg"

const style = {
    height: '500px',
    width: 'auto',
    marginTop: '10px'
}

function Image() {
    return (
            <img alt="Me" src={ Me } className="img-fluid" style={style}></img>
    )
}

export default Image;