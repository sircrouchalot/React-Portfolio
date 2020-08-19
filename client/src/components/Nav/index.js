import React from "react";
import "./nav.css";
function Nav() {
  return (
    <section className="container-fluid header">
      <a class="scroll" href="#welcome">
        <h1>Alex Crouch</h1>
      </a>
      <div>
        <ul>
          <li>
            <a class="scroll" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a class="scroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a class="scroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
