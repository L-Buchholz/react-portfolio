//NavLink enables active link highlighting when URL is selected
import { NavLink } from "react-router-dom";

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
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#d1bd07" } : undefined
                }
                to="/about-me"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#d1bd07" } : undefined
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#d1bd07" } : undefined
                }
                to="/resume"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#d1bd07" } : undefined
                }
                to="/contact-me"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <img
        styles={styles.navBarImg}
        id="banner"
        src={process.env.PUBLIC_URL + "/images/Greek_cafe.png"}
        alt="Website banner -- Cafe in Greece (&copy;Lauren Buchholz)"
      />
    </>
  );
}

export default NavBar;
