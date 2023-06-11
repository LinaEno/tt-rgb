/* eslint-disable no-unused-vars */
import * as React from "react";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import { Default, Mobile } from "../Media/Media";

const List = () => {
  return (
    <ul className="list">
      <li className="list__item">
        <div className="list__item-img">
          <img className="list__img" src={pic1} alt="Pic 1" />
        </div>
        <div>
          <p className="list__title list__title--upper">
            Кирилл <span>&nbsp;КАСАТОНОВ</span>
          </p>
          <p className="list__description">
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
            другими крупными корпорациями
          </p>
        </div>
      </li>
      <li className="list__item list__item--box">
        <div className="list__item-img">
          <img className="list__img--box" src={pic2} alt="Pic 2" />
        </div>
        <div>
          <p className="list__title">Бонус за регистрацию</p>
          <Mobile>
            <p className="list__description">
              PDF-файл &#34;5 преимуществ профессии веб-дизайнера&#34;
            </p>
          </Mobile>
          <Default>
            <p className="list__description list__description--container">
              PDF-файл &#34;5 преимуществ профессии фронтенд разработчика&#34;
            </p>
          </Default>
        </div>
      </li>
    </ul>
  );
};

export default List;
