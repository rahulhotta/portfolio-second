import {React, useEffect} from 'react'
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
   useEffect(() => {
     AOS.init(400);
   }, []);
  return (
    <div className="home__container container">
      <h1 className="home__my-name2 all__heading" data-aos="fade-up">
        Rahul <span className="home__my-tite2">Hotta</span>
      </h1>
      <h4 className="home__my-position2 all__desc" data-aos="fade-up">
        A web developer who likes to craft solid and scalable front end products
        with great user experiences.
      </h4>
    </div>
  );
}

export default Home