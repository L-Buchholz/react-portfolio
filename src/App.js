import "./App.css";
import ContactForm from "./components/Contact";
//TO-DO:
import AboutMe from "./components/About-Me";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="react-portfolio-app">
      <AboutMe />
      <ContactForm />
      <Portfolio />
      <Resume />
    </div>
  );
}
//
//

export default App;
