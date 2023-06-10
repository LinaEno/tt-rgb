/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import { Default } from "../components/Media/Media";
import "../assets/styles/index.scss";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Default>
        <Footer />
      </Default>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
