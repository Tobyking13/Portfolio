import React from "react";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";



function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="contact-info">
            <div className="contact-form">
              <form
                action="https://getform.io/f/05330002-35c0-4ec1-8217-46dfad3de30c"
                method="POST"
              >
                <label for="name">Name:</label>
                <br></br>
                <input type="text" name="name" id="name" />
                <br></br>
                <label for="email">Email:</label>
                <br></br>
                <input type="email" name="email" id="email" />
                <br></br>
                <label for="message">Message:</label>
                <br></br>
                <textarea type="text" name="message" id="message" />
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                />
                <br></br>
                <button
                  className="btn btn-outline-dark btn-lg contact-button"
                  type="submit"
                >
                  Send
                </button>
              </form>
              <br></br>
              <h3 className="display-6">Socials</h3>
              <a
                href="https://www.linkedin.com/in/toby-king-951193266/"
              >
               <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
              </a>
              <br></br>
              <br></br>
              <a href="https://github.com/Tobyking13">
              <FontAwesomeIcon icon={faSquareGithub} className="fa-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-1">
          <div class="vr" style={{ height: "80vh" }}></div>
        </div>

        <div className="col-7">
          <div style={{ display: "flex" }}>
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
