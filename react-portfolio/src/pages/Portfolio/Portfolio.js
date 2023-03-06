import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index.js";
import PortfolioCard from "./components/PortfolioCard/index.js";
import projects from "../../projects.json";
import "./style.css";

class Portfolio extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <div className="container">
        <Wrapper>
          {this.state.projects.map((project) => (
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
      </div>
    );
  }
}

export default Portfolio;
