import React from "react";
import styled, { css } from "styled-components";

//components
import MainHeader from "../../components/MainHeader";

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
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release o
          </Text>
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
