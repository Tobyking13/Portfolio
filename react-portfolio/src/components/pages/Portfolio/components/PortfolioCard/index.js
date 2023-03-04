import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
         
          <h2 style={{ color: "#36454F" }}>{props.name}</h2>
          <br></br>
          <strong>Description:</strong> {props.description}
          <br></br>
          <br></br>
          <strong>GitHub:</strong> <a href={props.github}>{props.github}</a>
          <br></br>
          <br></br>
          <strong>Link:</strong> <a href={props.link}>{props.link}</a>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
