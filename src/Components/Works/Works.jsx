import React from "react";
import "./Works.css";
import expenseTracker from "../../Images/expense-tracker.jpg";
import foodOrderApp from "../../Images/food-order-app.jpg";
import libot from "../../Images/Libot.jpg";
import notes from "../../Images/Notes-app.jpg";
import CardUi from "../CardUi/CardUi";
function Works() {
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
      title: "Food order website",
      img: foodOrderApp,
      description:
        "It is a website which will help you to order delicious food.",
      Link: "https://github.com/rahulhotta/Food-order-website.git",
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
      title: "Notes app",
      img: notes,
      description:
        "It is a website which will help you to manage all your notes.",
      Link: "https://upbeat-ritchie-c74b9f.netlify.app/",
      Git: "https://github.com/rahulhotta/my-notes-app.git",
    },
  ];
  return (
    <div className="works__container container">
      <div className="works__heading">
        <h1>MY <span className="works__works">WORKS</span></h1>
      </div>
      <div className="works__list">
        {worksData.map((work) => {
          return (
            <CardUi
              title={work.title}
              img={work.img}
              description={work.description}
              Link={work.Link}
              Git={work.Git}
              key={work.id}
            />
          );
        })}

      </div>
    </div>
  );
}

export default Works;