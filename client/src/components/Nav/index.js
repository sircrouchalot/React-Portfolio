import React from "react";
import "./nav.css";
function Nav() {
  return (
    <section className="container-fluid header">
      <a href="/">
        <h1>Alex Crouch</h1>
      </a>
      <div>
        <ul>
          <li>
            <a  href="/about">
              About Me
            </a>
          </li>
          <li>
            <a  href="/portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
