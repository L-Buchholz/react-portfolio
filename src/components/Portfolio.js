import React from "react";
import { Link } from "react-router-dom";

//"Styles" enables stylization of image; camel casing required instead of "-"
const styles = {
  article: {
    display: "flex",
    flex: "1 1 0",
    paddingRight: "1%",
    paddingLeft: "1%",
    flexDirection: "column",
    borderBottom: "1px solid #d8a47f",
    margin: "1% 0",
  },
  example: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    height: "200px",
    margin: "1% 1%",
    borderStyle: "solid",
    borderWidth: "4px",
    position: "relative",
  },
  exampleImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    objectPosition: "50% 50%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
};

function Portfolio() {
  return (
    <>
      <div style={styles.article}>
        <h2 id="my-work">My Work</h2>
      </div>
      <div style={styles.example} id="uProjekt">
        <Link to="https://l-buchholz.github.io/project-1/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/uProjeckt-screenshot.png"}
            alt="uProjekt webpage project management tool for programmers (top project)"
          />
        </Link>
      </div>
      <div style={styles.example} className="examples" id="nurseryRhymesQuiz">
        <Link to="https://l-buchholz.github.io/code-quiz/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/nursery-rhymes-quiz.png"}
            alt="Interactive timed nursery rhymes quiz (&copy;Lauren Buchholz)"
          />
        </Link>
      </div>
      <div style={styles.example} className="examples" id="dayCalendar">
        <Link to="https://l-buchholz.github.io/day-calendar/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/workday-calendar.png"}
            alt="Interactive workday scheduler (&copy;Lauren Buchholz)"
          />
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
