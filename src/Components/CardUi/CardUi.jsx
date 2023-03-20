import React from "react";
import "./CardUi.css";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
function CardUi(props) {
  return (
    // <div className="card__container">
    <div className="card__container">
      <div className="card__header">
        <img src={props.img} alt="site" className="card__site-img" />
        <div className="card__icon-container">
          <div className="card__text">
            <h2 className="card__heading">{props.title}</h2>
            <h6 className="card__desc">{props.description}</h6>
          </div>
          <div className="card__icons">
            <a
              href={props.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="card__icon"
            >
              <div>
                Open Link
                <HiExternalLink />
              </div>
            </a>

            <a
              href={props.Git}
              target="_blank"
              rel="noopener noreferrer"
              className="card__icon"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__text2">
          <h2 className="card__heading2">{props.title}</h2>
          <h6 className="card__desc2">{props.description}</h6>
        </div>
        <div>
          <a href={props.Link} target="_blank" rel="noopener noreferrer">
            <button className="card__link">open it</button>
          </a>

          <a href={props.Git} target="_blank" rel="noopener noreferrer">
            <button className="card__link">Git hub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardUi;
