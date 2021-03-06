import React from "react";

//"Styles" enables stylization of image; camel casing required instead of "-"
const styles = {
  article: {
    display: "flex",
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
        <h2 id="portfolio">Portfolio</h2>
      </div>
      <div style={styles.example} id="mileHi">
        <a href="https://project2-milehi.herokuapp.com/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/milehi-screenshot.png"}
            alt="MileHi online database for connecting with Denver communities"
          />
        </a>
      </div>
      <div style={styles.example} id="uProjekt">
        <a href="https://l-buchholz.github.io/project-1/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/uProjeckt-screenshot.png"}
            alt="uProjekt webpage project management tool for programmers"
          />
        </a>
      </div>
      <div style={styles.example} id="codeCompanion">
        <a href="https://github.com/SmithCray/Code-Companion" target="blank">
          <img
            style={styles.exampleImg}
            src={
              process.env.PUBLIC_URL +
              "/images/code-companion-wireframe-screenshot.png"
            }
            alt="Code Companion online programmer community"
          />
        </a>
      </div>
      <div style={styles.example} id="nurseryRhymesQuiz">
        <a href="https://l-buchholz.github.io/code-quiz/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/nursery-rhymes-quiz.png"}
            alt="Interactive timed nursery rhymes quiz (&copy;Lauren Buchholz)"
          />
        </a>
      </div>
      <div style={styles.example} id="emailRegex">
        <a
          href="https://gist.github.com/L-Buchholz/91c98d4b070cced3286b268eb67d5dfd
"
          target="blank"
        >
          <img
            style={styles.exampleImg}
            src={
              process.env.PUBLIC_URL + "/images/email-regex-gist-screenshot.png"
            }
            alt="Email Regex gist on GitHub (&copy;Lauren Buchholz)"
          />
        </a>
      </div>
      <div style={styles.example} id="dayCalendar">
        <a href="https://l-buchholz.github.io/day-calendar/" target="blank">
          <img
            style={styles.exampleImg}
            src={process.env.PUBLIC_URL + "/images/workday-calendar.png"}
            alt="Interactive workday scheduler (&copy;Lauren Buchholz)"
          />
        </a>
      </div>
    </>
  );
}

export default Portfolio;
