import React from "react";
import Jumbotron from "./components/jumbotron/jumbotron";
import Image from "./components/image/image";
import "./style.css";

function Home() {
  return (
<div className="container ">
  <Jumbotron className="jumbotron">
    <h1>Heading</h1>
    <p>Content</p>
  </Jumbotron>
  <div className="row justify-content-center">
    <div className="col-12 col-lg-4 d-flex justify-content-center">
      <Image src="image.jpg" fluid />
    </div>
    <div className="col-12 col-lg-8 d-flex justify-content-center">
      <iframe className="iframe" src="https://tobyking13.github.io/Weather-Dashboard/" title="Etch A Sketch" />
    </div>
  </div>
</div>



  );
}

export default Home;
