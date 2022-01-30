/*
*
TO-DO: 
- Make "About Me" default page and HIGHLIGHT
- Have every other page highlighted when user is on it

JS:
currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]')
currentLinks.forE‌​ach(function(link) {
    link.{styles.C}+= ' current-link')
});
CSS (add under styles): 
  currentLink: {
    color: "#d1bd07",
  },
*
*/

//NavLink enables active link highlighting when URL is selected
import { Link, NavLink } from "react-router-dom";

// Camel casing necessary to replace "-"
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    alignItems: "center",
    padding: "1%",
    backgroundColor: "#13293d",
    color: "#fff",
  },
  /*
  REVISED:
  navBarImg: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    objectPosition: "50% 50%",
    border: "2px solid black",
  },
  */
  navBarImg: {
    display: "flex",
    flex: "1 1 0",
    marginBottom: "2%",
    width: "100%",
    height: "300px",
    objectFit: "cover",
    objectPosition: "50% 50%",
    border: "1px solid #d8a47f",
  },
};

function NavBar() {
  return (
    <>
      <div style={styles.header}>
        <h1>Lauren Buchholz</h1>
        <nav>
          <ul>
            <li>
              {/* Demo color: Desired color = "d1bd07" */}
              <NavLink
                className={(navData) => (navData.isActive ? "red" : "")}
                to="/about-me"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="resume">Resume</Link>
            </li>
            <li>
              <Link to="contact-me">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
      <img
        styles={styles.navBarImg}
        src={process.env.PUBLIC_URL + "/images/Greek_cafe.png"}
        alt="Website banner -- Cafe in Greece (&copy;Lauren Buchholz)"
      />
    </>
  );
}

export default NavBar;
