import React from "react";
// Import CSS styling
import "../Card.css";

function Portfolio() {
  return (
    //Does this need to fall under "body"?
    <>
      <article>
        <div>
          <h2 id="my-work">My Work</h2>
        </div>
        <div class="example1">
          <a href="https://l-buchholz.github.io/project-1/" target="blank">
            <img
              id="top"
              src="./assets/images/uProjeckt-screenshot.jpg"
              alt="uProjekt webpage project management tool for programmers (top project)"
            />
          </a>
        </div>
      </article>
      <article>
        <div class="blankspace"></div>
        <div class="examples github-link" id="examples1">
          <a href="https://l-buchholz.github.io/code-quiz/" target="blank">
            <img
              src="./assets/images/nursery-rhymes-quiz.png"
              alt="Interactive timed nursery rhymes quiz (&copy;Lauren Buchholz)"
            />
          </a>
        </div>
        <div class="examples github-link" id="examples2">
          <a href="https://l-buchholz.github.io/day-calendar/" target="blank">
            <img
              src="./assets/images/workday-calendar.png"
              alt="Interactive workday scheduler (&copy;Lauren Buchholz)"
            />
          </a>
        </div>
      </article>
    </>
  );
}

export default Portfolio;
