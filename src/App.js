import "./App.css";

import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";
import Works from "./Components/Works/Works";
import Skills from "./Components/Skills/Skills";
import { Route, Routes } from "react-router-dom";

const navTitles = ["home", "about", "works", "contact"];

function App() {
  return (
    <div className="App">
      <div id="home">
        <Hero />
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="works">
        <Works  />
      </div>
      {/* <div id="contact">
        <Contact  />
      </div> */}

      <NavBar />

      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/works" exact element={<Works />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
