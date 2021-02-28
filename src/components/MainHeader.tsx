import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

//components
import Deliver from "../container/deliver";

const MainHeader = () => {
  return (
    <>
      <Wrap>
        <MainTitleContainer style={{}}>
          <Title>The Deliver</Title>
        </MainTitleContainer>
        <Container>
          <Item>
            <CustomLink to="/">Home</CustomLink>
          </Item>
          <Item>
            <p>ABOUT PAGE</p>
          </Item>
          <Item>
            <CustomLink to="/tracking">TRACKING</CustomLink>
          </Item>
          <Item>
            <p>NEWS</p>
          </Item>
          <Item>
            <p>CONTACT</p>
          </Item>
          <Item>
            <SearchIcon />
          </Item>
        </Container>
      </Wrap>
    </>
  );
};

export default MainHeader;

const Wrap = styled.div`
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const Item = styled.div`
  border: none;
  outline: none;
  margin: 0px 15px;
`;

const CustomLink = styled(Link)`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  align-items: center;
  text-align: center;
  color: #808080;
`;

const MainTitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.p`
  font-family: "Fredoka One", cursive;
  font-weight: '400';
  font-size: 25px;
`;
