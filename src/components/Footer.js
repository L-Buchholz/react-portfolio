import React from "react";

const styles = {
  footerStyle: {
    display: "flex",
    textAlign: "center",
    backgroundColor: "#13293d",
    color: "#fff",
    justifyContent: "space-evenly",
    width: "100%",
  },
};

function Footer() {
  return (
    <div style={styles.footerStyle}>
      <footer>
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
      </footer>
    </div>
  );
}

export default Footer;
