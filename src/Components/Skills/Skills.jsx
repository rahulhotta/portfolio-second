import {React, useEffect} from "react";
import "./Skills.css";

import { FaHtml5, FaCss3, FaReact, FaPython, FaGithub } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiRedux, SiJava } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init(800);
  }, []);
  return (
    <div className="skills__container container">
      <div className="about__skills-container">
        <div className="about__skills-logo" data-aos="fade-up">
          <span className="about__skills-logo-p1">MY</span>
          <span className="about__skills-logo-p2">SKILLS</span>
        </div>
        <div className="about__skills-list">
          <div className="about__skill" data-aos="fade-up">
            <FaHtml5 className="about__skill-icon" /> HTML
          </div>
          <div className="about__skill" data-aos="fade-up">
            <FaCss3 className="about__skill-icon" /> CSS
          </div>
          <div className="about__skill" data-aos="fade-up">
            <SiJavascript className="about__skill-icon" /> JAVASCRIPT
          </div>
          <div className="about__skill" data-aos="fade-up">
            <FaReact className="about__skill-icon" /> REACT
          </div>
          <div className="about__skill" data-aos="fade-up">
            <SiRedux className="about__skill-icon" /> REDUX
          </div>
          <div className="about__skill" data-aos="fade-up">
            <SiBootstrap className="about__skill-icon" /> BOOTSTRAP
          </div>
          <div className="about__skill" data-aos="fade-up">
            <FaPython className="about__skill-icon" /> PYTHON
          </div>
          <div className="about__skill" data-aos="fade-up">
            <SiJava className="about__skill-icon" /> JAVA
          </div>
          <div className="about__skill" data-aos="fade-up">
            <FaGithub className="about__skill-icon" /> GITHUB
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
