import React from "react";
import { Switch, Route } from "react-router-dom";

import MyInfo from "./components/MyInfo";
import simpleMap from "./components/Map";
import signIn from "./components/SignIn";
import aboutUs from "./components/About";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={MyInfo}></Route>
      <Route exact path="/neighborhood" component={simpleMap}></Route>
      <Route exact path="/signIn" component={signIn}></Route>
      <Route exact path="/about" component={aboutUs}></Route>
    </Switch>
  );
};

export default Main;
