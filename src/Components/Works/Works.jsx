import { React, useEffect } from "react";
import "./Works.css";
import expenseTracker from "../../Images/expense-tracker.jpg";
import foodOrderApp from "../../Images/food-order-app.jpg";
import libot from "../../Images/Libot.jpg";
import notes from "../../Images/Notes-app.jpg";
import DeCloud from "../../Images/De-cloud.jpg";
import CardUi from "../CardUi/CardUi";
import AOS from "aos";
import "aos/dist/aos.css";

function Works() {
  useEffect(() => {
    AOS.init(800);
  }, []);
  const worksData = [
    {
      id: 1,
      title: "Expense tracker",
      img: expenseTracker,
      description:
        "It is a website which will help you to keep track of your expenses.",
      Link: "https://expense-tracker-4ve.pages.dev/",
      Git: "https://github.com/rahulhotta/expense-tracker.git",
    },
    {
      id: 2,
      title: "DE Cloud",
      img: DeCloud,
      description: "It is a decentralised cloud storage system.",
      Link: "https://de-cloud.netlify.app/",
      Git: "https://github.com/ashusharma-git/de-cloud.git",
    },
    {
      id: 3,
      title: "Libot",
      img: libot,
      description:
        "It is a website which will help you to search books, read free samples and order books.",
      Link: "https://libot.pages.dev/",
      Git: "https://github.com/rahulhotta/LiBot.git",
    },
    {
      id: 4,
      title: "To do list",
      img: notes,
      description:
        "It is a website which will help you to manage all your Tasks.",
      Link: "https://to-do-list-a9x.pages.dev/",
      Git: "https://github.com/rahulhotta/To-do-list.git",
    },
  ];
  return (
    <div className="works__container container">
      <div className="works__heading">
        <h1>
          MY <span className="works__works">WORKS</span>
        </h1>
      </div>
      <div className="works__list">
        {worksData.map((work) => {
          return (
            <div data-aos="fade-up">
              <CardUi
                title={work.title}
                img={work.img}
                description={work.description}
                Link={work.Link}
                Git={work.Git}
                key={work.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
