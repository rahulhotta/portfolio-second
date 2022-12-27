import "./App.css";
import { React, useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NavBar from "./Components/NavBar/NavBar";
// import Contact from "./Components/Contact/Contact";
import Works from "./Components/Works/Works";
import Skills from "./Components/Skills/Skills";
// import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init(800);
  }, []);


  return (
    <div className="App">
      <div id="home" >
        <Hero />
        <Home />
      </div>
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      <div id="skills" data-aos="fade-up">
        <Skills />
      </div>
      <div id="works" data-aos="fade-up">
        <Works />
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
