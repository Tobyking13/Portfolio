import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
import "./style.css";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-4">Contact Me</h1>
        <hr className="my-4" />

        <div className="col-4">
          <div className="contact-info">
          <br></br>
            <br></br>
            <h3 className="display-6">Email</h3>
            <br></br>
            <button type="button" class="btn btn-outline-dark btn-lg contact-button">
              <a href="mailto:tobyrking@icloud.com">Send email</a>
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <h3 className="display-6">Socials</h3>
            <a
              className="contact-icons"
              href="https://www.linkedin.com/in/toby-king-951193266/"
            >
              <img
                className="contact-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
            <br></br>
            <br></br>
            <a className="contact-icons" href="https://github.com/Tobyking13">
              <img
                className="contact-icons"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="col-1">
          <div class="vr" style={{ height: "80vh" }}></div>
        </div>

        <div className="col-7">
          <div style={{display:"flex"}}>
          <iframe
            className="cv"
            src="https://drive.google.com/file/d/1kUosXMc5kJ1TBSMz_I1rVQR4W-L9k2Fz/preview?usp=sharing"
            title="cv"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
