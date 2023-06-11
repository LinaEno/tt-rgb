/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { Default } from "../components/Media/Media";
import "../assets/styles/index.scss";

const IndexPage = () => {
  return (
    <div className="home-page">
      <Header />
      <Main />
      <Default>
        <Footer />
      </Default>
    </div>
  );
};

export const Head = () => (
  <>
    <title>front-end с нуля легкий старт в IT профессии</title>
    <meta
      name="description"
      content="Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как начать карьеру в востребованной профессии  с зарплатой от 1 000$"
    />
  </>
);

export default IndexPage;
