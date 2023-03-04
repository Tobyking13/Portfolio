import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Learn from "../Learn";
import "./style.css";

function Contact() {
  return (
    <div className="container">
      <h1 className="display-4">Contact Me</h1>
      <div className="contact-icons">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
          className="icons"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="LinkedIn"
          className="icons"
        />
      </div>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
