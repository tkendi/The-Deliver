import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const MainHeader = () => {
  return (
    <>
      <Wrap>
        <MainTitleContainer>
          <Title>The Deliver</Title>
        </MainTitleContainer>
        <Container>
          <Item>
            <CustomLink to="/">HOME</CustomLink>
          </Item>
          <Item>
            <CustomLink to="#">ABOUT PAGE</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/tracking">TRACKING</CustomLink>
          </Item>
          <Item>
            <CustomLink to="#">NEWS</CustomLink>
          </Item>
          <Item>
            <CustomLink to="#">CONTACT</CustomLink>
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
  background-color: #f2f2f2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
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
  color: #262626;
  font-family: "Hind", sans-serif;
  font-size: 17px;
  font-weight: bold;
`;

const MainTitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.p`
  font-family: "Fredoka One", cursive;
  font-weight: "400";
  font-size: 30px;
`;
