import { React, useEffect } from "react";
import './About.css'
import CardImg from '../../Images/Business_card.png';
import AOS from "aos";
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init(700);
  }, []);
  return (
    <div className="about__container container">
      <h1 className="about__heading all__heading" data-aos="fade-up">
        About <span className="about__me">Me </span>
      </h1>
      <h3 className="about__desc all__desc" data-aos="fade-up">
        I am Rahul Hotta a web developer focused on crafting clean and
        user-friendly experiences, I am passionate about building excellent
        software that improves the lives of those around me.
      </h3>
      <div data-aos="fade-up">
        <img src={CardImg} alt="" className="about__card" />
      </div>
    </div>
  );
}

export default About