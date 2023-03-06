import React from "react";

function About() {
  const style = {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    fontSize: "20px",
  };
  return (
    <div className="container">
      <div className="home-text" style={style}>
        <p>
          I am a driven front-end web developer with a passion for coding and
          design. My love for music and sound engineering, combined with my
          technical skills, bring a unique perspective to my work. Hailing from
          London, I am currently residing in Cornwall where I am able to immerse
          myself in the beauty of the coast while pursuing my passion for web
          development.
        </p>
        <p>
          I taught myself the basics of coding and web development, and my
          passion for the field led me to continue my education by studying
          front-end web development. My expertise in JavaScript, HTML, CSS, and
          CSS libraries like Bootstrap and Bulma, enables me to create dynamic
          and visually stunning websites that engage and delight users. My
          experience with jQuery, version control and collaboration tools like
          Git and Github, make me a seasoned professional who is able to work
          efficiently and effectively on projects, both individually and as part
          of a team.
        </p>
        <p>
          In my work as a web developer, I am continuously exploring the limits
          of what can be achieved and seeking out the latest innovative
          technologies and techniques. My unwavering commitment to creating
          designs that are both user-friendly and intuitive, coupled with my
          technical skills, enable me to bring a distinctive blend of creative
          vision and technical proficiency to every project I undertake.
        </p>
      </div>
    </div>
  );
}

export default About;
