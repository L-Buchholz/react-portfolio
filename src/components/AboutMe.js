import React from "react";

//"Styles" enables stylization of image; camel casing required instead of "-"
const styles = {
  article: {
    display: "flex",
    borderBottom: "1px solid #d8a47f",
    margin: "1% 0",
  },
  portrait: {
    display: "inline",
    flexWrap: "nowrap",
    float: "left",
    width: "30%",
    padding: "4px",
    marginRight: "2px",
    marginLeft: "2%",
  },
  text: {
    display: "inline",
    flexWrap: "nowrap",
    float: "right",
    width: "65%",
    color: "black",
    margin: "auto",
  },
};

function AboutMe() {
  return (
    <>
      <div style={styles.article}>
        <h2 id="about-me">About Me</h2>
      </div>
      <div style={styles.article}>
        <img
          style={styles.portrait}
          src={process.env.PUBLIC_URL + "/images/Portrait.png"}
          alt="Lauren Buchholz self-portrait (&copy;Lauren Buchholz)"
        />
        <p style={styles.text}>
          Hi, I’m Lauren! I’m a professional photographer and communications
          specialist who's currently learning fullstack development through the
          University of Denver. Click on the links below to see project
          examples, or visit my resume or the "Contact Me" section to learn more
          and connect.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
