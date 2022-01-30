import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    //Does this need to fall under "body"?
    <>
      <article>
        <div>
          <h2 id="my-work">My Work</h2>
        </div>
        <div className="example1">
          <Link to="https://l-buchholz.github.io/project-1/" target="blank">
            <img
              src="./images/uProjeckt-screenshot.png"
              alt="uProjekt webpage project management tool for programmers (top project)"
            />
          </Link>
        </div>
      </article>
      <article>
        <div className="blankspace"></div>
        <div className="examples github-link" id="examples1">
          <a href="https://l-buchholz.github.io/code-quiz/" target="blank">
            <img
              src="./assets/images/nursery-rhymes-quiz.png"
              alt="Interactive timed nursery rhymes quiz (&copy;Lauren Buchholz)"
            />
          </a>
        </div>
        <div className="examples github-link" id="examples2">
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
