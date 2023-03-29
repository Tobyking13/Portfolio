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
          I am a passionate and driven front-end web developer with expertise in
          the latest web technologies. My love for music and sound engineering,
          combined with my technical skills, bring a unique perspective to my
          work. Originally from London, I am currently based in Cornwall where I
          can fully immerse myself in the beauty of the coast while pursuing my
          passion for web development.
        </p>
        <p>
          My journey in web development started with self-teaching, which has
          provided me with a strong foundation in the basics of coding and web
          development. To further my education, I decided to study front-end web
          development, where I have become proficient in using cutting-edge
          technologies such as React, Next.js, and Node.js. My expertise in
          these technologies has enabled me to build complex and powerful web
          applications that provide seamless user experiences.
        </p>
        <p>
          In addition to these technologies, I have a strong command of
          JavaScript, HTML, CSS, and CSS libraries such as Bootstrap and Bulma.
          My experience with jQuery, version control, and collaboration tools
          like Git and Github, make me a seasoned professional who can work
          efficiently and effectively on projects both individually and as part
          of a team.
        </p>
        <p>
          My experience with APIs has allowed me to integrate various services
          and platforms into my projects, providing real-time data and
          functionality. With my technical expertise and creative vision, I am
          committed to creating designs that are both user-friendly and
          intuitive, bringing a distinctive blend of creative vision and
          technical proficiency to every project I undertake.
        </p>
        <p>
          In my work as a web developer, I am continuously exploring the limits
          of what can be achieved with innovative technologies and techniques.
          My unwavering commitment to creating exceptional user experiences,
          coupled with my passion for web development, makes me confident in my
          ability to contribute to any project and provide innovative solutions
          that meet and exceed client expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
