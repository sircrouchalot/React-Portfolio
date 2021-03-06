import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer id="contact">
        <div className="contact-footer">
          <h3>Get in Touch!</h3>
          <div className="links">
            <ul>
              <li>
                <a href="https://github.com/sircrouchalot" rel="noopener noreferrer" target="_blank"
                  ><i className="fab fa-github icon" ></i>Github</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alex-crouch/"
                  rel="noopener noreferrer" target="_blank"
                  ><i className="fab fa-linkedin icon"></i>LinkedIn</a>
              </li>
              <li>
                <a href="mailto:acrouch06@gmail.com" rel="noopener noreferrer" target="_blank"
                  ><i className="fas fa-envelope-square icon"></i>Email</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/0B2aCcZowSEoqYWFPZzR4RkxmcWs/view?usp=sharing" rel="noopener noreferrer" target="_blank"
                  ><i className="far fa-file icon"></i>Resume</a>
              </li>
            </ul>
          </div>
          <h6>Built using ReactJS</h6>
        </div>
      </footer>
  );
}

export default Footer;