import React from "react";
// Import CSS styling
import "../Card.css";

function AboutMe() {
  return (
    //Does this need to fall under "body"?
    <article>
      <div>
        <h2 id="about-me">About Me</h2>
      </div>
      <figure>
        <img
          src="./assets/images/Portrait.jpg"
          alt="Lauren Buchholz self-portrait (&copy;Lauren Buchholz)"
        />
        <p>
          Hi, I’m Lauren! I’m a professional photographer and communications
          specialist who's currently learning fullstack development through the
          University of Denver. Click on the links below to see project
          examples, or visit my resume or the "Contact Me" section to learn more
          and connect.
        </p>
      </figure>
    </article>
  );
}

export default AboutMe;
