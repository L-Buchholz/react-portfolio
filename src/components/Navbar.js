/*
TO-DO: 
- Updated breakpoint page links, below
- Make "About Me" default page and HIGHLIGHT
- Have other page highlighted when user is on them
*/

import React from "react";
// Import CSS styling
import "../Header.css";

function NavBar() {
  return (
    //<header className="header", instead?>
    <header>
      <img
        class="banner"
        src="./assets/images/Greek_cafe.jpg"
        alt="Website banner -- Cafe in Greece (&copy;Lauren Buchholz)"
      />
      <h1>Lauren Buchholz</h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
