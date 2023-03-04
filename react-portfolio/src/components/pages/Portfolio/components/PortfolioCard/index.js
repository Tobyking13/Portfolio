import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub:</strong> <a href={props.github}>{props.github}</a>
          </li>
          <li>
            <strong>Link:</strong> <a href={props.link}>{props.link}</a>
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default PortfolioCard;
