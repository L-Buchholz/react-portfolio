import React from "react";
// Import CSS styling
import "../Footer.css";

function Footer() {
  return (
    //Does this need to fall under "body"?
    <footer>
      <article>
        <ul>
          <li>
            <a href="https://github.com/L-Buchholz" target="blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/naturalvisions/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://laurenbuchholz.photoshelter.com/contact"
              target="blank"
            >
              Photoshelter
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
}

export default Footer;
