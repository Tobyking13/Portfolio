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
      <div className="home-div">
        <div>
          <Image className="image" />
        </div>
        <div className="home-text" style={{ fontSize: "20px" }}>
          <p>
            I am a driven front-end web developer with a passion for coding and
            design. My love for music and sound engineering, combined with my
            technical skills, bring a unique perspective to my work. Hailing
            from London, I am currently residing in Cornwall where I am able to
            immerse myself in the beauty of the coast while pursuing my passion
            for web development.
          </p>
          <p>
            I taught myself the basics of coding and web development, and my
            passion for the field led me to continue my education by studying
            front-end web development. My expertise in JavaScript, HTML, CSS,
            and CSS libraries like Bootstrap and Bulma, enables me to create
            dynamic and visually stunning websites that engage and delight
            users. My experience with jQuery, version control and collaboration
            tools like Git and Github, make me a seasoned professional who is
            able to work efficiently and effectively on projects, both
            individually and as part of a team.
          </p>
          <p>
            In my work as a web developer, I am continuously exploring the
            limits of what can be achieved and seeking out the latest innovative
            technologies and techniques. My unwavering commitment to creating
            designs that are both user-friendly and intuitive, coupled with my
            technical skills, enable me to bring a distinctive blend of creative
            vision and technical proficiency to every project I undertake.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
