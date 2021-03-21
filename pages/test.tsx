import React from "react";
import styled, { ThemeProvider } from "styled-components";

//layout
import theme from "../styles/theme";

const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <p>asdf</p>
      </Wrap>
    </ThemeProvider>
  );
};

export default Test;

const Wrap = styled.div`
  width: 100%;
  border: 1px solid #000;
`;
