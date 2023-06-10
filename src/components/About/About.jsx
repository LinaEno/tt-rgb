/* eslint-disable no-unused-vars */
import * as React from "react";
import List from "../List/List";
import icon from "../../assets/images/world-icon.svg";
import { Default, Mobile } from "../Media/Media";

const About = () => {
  return (
    <div className="about">
      <p className="about__info">
        <img src={icon} alt="icon" />
        Вебинар
      </p>
      <h1 className="about__title">front-end</h1>
      <div className="about__subtitle">
        <p className="about__accent">с нуля</p>
        <p className="about__text">легкий старт в IT профессии</p>
      </div>
      <Mobile>
        <p className="about__description">
          Узнайте какими
          <span className="about__description--bold">
            &nbsp; навыками должен обладать фронтенд разработчик в 2022 году
            &nbsp;
          </span>
          и как начать карьеру в востребованной профессии <br />
          <span className="about__description--color">
            &nbsp;с зарплатой от 1 000$
          </span>
        </p>
      </Mobile>
      <Default>
        <p className="about__description">
          Узнайте какими
          <span className="about__description--bold">
            &nbsp; навыками должен обладать фронтенд разработчик в 2022 году
            &nbsp;
          </span>
          и как начать карьеру в востребованной профессии с зарплатой&nbsp;
          <span className="about__description--block">от 1 000$</span>
        </p>
      </Default>
      <Default>
        <List />
      </Default>
    </div>
  );
};

export default About;
