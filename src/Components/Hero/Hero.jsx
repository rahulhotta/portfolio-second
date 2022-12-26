import React from "react";
import "./Hero.css";
import Avatar from "../../Images/avatar.jpg";
import Resume from "../../Images/Rahul_Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";

function Hero() {
  return (
    <div className="hero__container ">
      <div className="hero__left">
        
          <img src={Avatar} alt="Avatar" className="hero__avatar" />
        <h1 className="hero__my-name1 hero_element">Rahul Hotta</h1>
        <h4 className="hero__my-position1 hero_element">Web developer</h4>
        <div className="hero__social hero_element">
          <a
            href="https://www.linkedin.com/in/rahul-hotta-a58078203/"
            target="__blank"
            className="hero__social-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/rahulhotta"
            target="__blank"
            className="hero__social-icon"
          >
            <VscGithubInverted />
          </a>
          <a
            href="mailto: rahulhotta99@gmail.com"
            target="__blank"
            className="hero__social-icon"
          >
            <FiMail />
          </a>
        </div>

        <a href={Resume} download="rahul resume">
          <button className="hero__resume">Download resume</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
