import React from "react";
import Jumbotron from "./components/jumbotron/jumbotron";
import Image from "./components/image/image";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div>
        <Jumbotron className="jumbotron" />
      </div>
      <div className="container home-div">
        <div>
          <Image className="image" />
        </div>
        <div>
          <iframe className="iframe" src="https://tobyking13.github.io/Etch-A-Sketch/" title="Etch A Sketch">

          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
