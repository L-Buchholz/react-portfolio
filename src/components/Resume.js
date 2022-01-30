import React from "react";

const styles = {
  article: {
    display: "flex",
    borderBottom: "1px solid #d8a47f",
    margin: "1% 0",
  },
};

function Resume() {
  return (
    <>
      <div style={styles.article}>
        <h2 id="resume">Resume</h2>
      </div>
      <div style={styles.article}>
        <div>
          <h4>Proficiencies</h4>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>JavaScript</ul>
          <ul>JQuery</ul>
          <ul>Express.js</ul>
          <ul>Node.js</ul>
          <ul>MongDB (inc. Mongoose)</ul>
          <ul>MySQL</ul>
          <br />
          <a
            href="https://drive.google.com/file/d/17YUD3RYDvmX_bB3Ji5bss53g-BrWwTAJ/view"
            target="blank"
          >
            Click here to download my resume
          </a>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Resume;
