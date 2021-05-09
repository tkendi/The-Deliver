import App, { Container } from "next/app";
import React from "react";
import GlobalStyles from "../styles/globa-style";

class ReactApp extends App<any> {
  public render() {
    return (
      <Container>
        <GlobalStyles />
      </Container>
    );
  }
}

export default ReactApp;
