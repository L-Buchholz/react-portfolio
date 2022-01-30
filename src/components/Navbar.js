/*
TO-DO: 
- Make "About Me" default page and HIGHLIGHT
- Have every other page highlighted when user is on it
*/

//NavLink enables active link highlighting when URL is selected
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
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
      </header>
      <img
        className="banner"
        src={process.env.PUBLIC_URL + "/images/Greek_cafe.png"}
        alt="Website banner -- Cafe in Greece (&copy;Lauren Buchholz)"
      />
    </>
  );
}

export default NavBar;
