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
                <a href="https://drive.google.com/file/d/1s3c14PXevaZMeVvIi29e8kZXJRkyFIp5/view?usp=sharing" rel="noopener noreferrer" target="_blank"
                  ><i className="far fa-file icon"></i>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}

export default Footer;