import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

/*

//CSS styling for "main" class
import "./Card.css";
// Enables switching between components on single-page app (appearance of multi-page)
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/">
      <NavBar />

      <main>
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact-me" component={ContactMe} />
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
*/
