import React from 'react'
import './About.css'
import CardImg from '../../Images/Business_card.png'
function About() {
  return (
    <div className="about__container container">
      <h1 className="about__heading all__heading">
        About <span className="about__me">Me </span>
      </h1>
      <h3 className="about__desc all__desc">
        I am Rahul kumar hotta a web developer focused on crafting clean and
        user-friendly experiences, I am passionate about building excellent
        software that improves the lives of those around me.
      </h3>
      <div>
        <img src={CardImg} alt="" className="about__card" />
      </div>
    </div>
  );
}

export default About