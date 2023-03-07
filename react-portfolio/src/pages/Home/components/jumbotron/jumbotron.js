import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <p className="lead">
        A full-stack web developer with a background in music science, dedicated
        to delivering high-quality and innovative solutions that exceed client
        expectations. Skilled in creative problem-solving, project management,
        and delivering engaging user interfaces and complex backend systems.{" "}
      </p>
      <hr className="my-4" />
      <div>
        <p>🧰 Languages & Tools</p>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
          alt="jQuery"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="node.js"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          alt="Bootstrap"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="Git"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
          alt="Photoshop"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
          alt="Illustrator"
          className="icons"
        />
      </div>
      {/* <hr className="my-4" /> */}
    </div>
  );
}

export default Jumbotron;
