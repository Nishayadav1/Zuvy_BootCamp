import React, { useRef } from "react";
import "./App.css";
const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>
      <section ref={homeRef} className="section home">
        <h1>Home Page</h1>
      </section>

      <section ref={aboutRef} className="section about">
        <h1>About Me</h1>
      </section>

      <section ref={projectsRef} className="section projects">
        <h1>My Projects</h1>
      </section>

      <section ref={contactRef} className="section contact">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
};

export default App;
