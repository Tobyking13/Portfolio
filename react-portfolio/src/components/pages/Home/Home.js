import React from "react";
import "./style.css"

function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-4">Toby King Portfolio</h1>
          <p className="lead">Experienced full-stack web developer with a background in music science, dedicated to developing high-quality, innovative solutions that exceed client expectations. Skilled in creative problem-solving, project management, and delivering engaging user interfaces and complex backend systems.</p>
        <hr className="my-4" />
          {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
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
          
      </div>
    </div>
  );
}

export default Home;
