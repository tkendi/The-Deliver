import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Deliver from "./container/deliver";
import Main from "./container/main";

function App() {
  return (
    <>
      <Main />
      <Route path="/tracking" component={Deliver} />
    </>
  );
}

export default App;
