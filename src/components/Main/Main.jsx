/* eslint-disable no-unused-vars */
import * as React from "react";
import About from "../About/About";
import Form from "../Form/Form";
import List from "../List/List";
import { Laptop, Mobile } from "../Media/Media";
import group from "../../assets/images/group.png";

const Main = () => {
  return (
    <div className="container main">
      <About />
      <Form />
      <Mobile>
        <List />
      </Mobile>
      <Laptop>
        <img src={group} alt="backround group" className="main__group" />
      </Laptop>
    </div>
  );
};

export default Main;
