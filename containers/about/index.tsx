import React from "react";
import styled, { css } from "styled-components";

//components
import MainHeader from "components/MainHeader";

interface StyledProps {
  color?: string;
  bold?: boolean;
  src?: string;
}

const AboutContainer = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <Container>
        <TitleWrap>
          <Title bold color="#1A1A1A">
            About this
          </Title>
          <Text>We can check delivery for you</Text>
          <Text>We can know where my parcel</Text>
          <Text>We can know how long time for receving</Text>
          {/* This web site current use my testing web site. Check
            /examples/calendar, /examples/motion, /example/sidebar,
            /example/skeleton */}
        </TitleWrap>
      </Container>
    </React.Fragment>
  );
};

export default AboutContainer;

const Container = styled.div`
  padding: 0px 95px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

const Title = styled.h1<StyledProps>`
  font-size: 25px;
  color: ${(props) => props.color};
  margin: 0px;
  line-height: 50px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

const Text = styled.p<StyledProps>`
  font-size: 15px;
  color: ${(props) => props.color};
  margin: 0px;
  line-height: 23px;

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
