import React from "react";
import styled from "styled-components";
import Link from "next/link";
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
            <Link href="/">
              <LinkTitle>HOME</LinkTitle>
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <LinkTitle>ABOUT PAGE</LinkTitle>
            </Link>
          </Item>
          <Item>
            <Link href="/deliver">
              <LinkTitle>TRACKING</LinkTitle>
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <LinkTitle>NEWS</LinkTitle>
            </Link>
          </Item>
          <Item>
            <Link href="#">
              <LinkTitle>CONTACT</LinkTitle>
            </Link>
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
  /* background-color: #f2f2f2; */
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

const LinkTitle = styled.p`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  text-align: center;
  font-family: "Hind", sans-serif;
  font-size: 17px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
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
