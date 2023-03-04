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
      <div>
        <Image className="image" />
      </div>
    </div>
  );
}

export default Home;
