import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index.js"
import Title from "./components/Title/index.js";
import PortfolioCard from "./components/PortfolioCard/index.js"
import projects from "../../../projects.json";


class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };


  render() {
  return (
<Wrapper>
        <Title>Project List</Title>
        {this.state.projects.map(project => (
          <PortfolioCard
            removeFriend={this.removeFriend}
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            link={project.link}
          />
        ))}
      </Wrapper>
  );
}
}

export default Portfolio;
