/* eslint-disable no-unused-vars */
import * as React from "react";
import logo from "../../assets/images/logo.png";
import logoBig from "../../assets/images/logo-tab.png";
import calendar from "../../assets/images/calendar_today.svg";
import time from "../../assets/images/gg_time.svg";
import { Default, Mobile } from "../Media/Media";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="header__logo">
          <Mobile>
            <a href="/">
              <img src={logo} alt="logo" width={101} />
            </a>
          </Mobile>
          <Default>
            <a href="/">
              <img src={logoBig} alt="logo" width={182} />
            </a>
          </Default>
        </div>
        <div>
          <ul className="header__info">
            <li className="header__item">
              <img src={calendar} alt="icon" className="header__icon" />
              28 декабря
            </li>
            <li className="header__item">
              <img src={time} alt="icon" className="header__icon" />
              3,5 часа
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
