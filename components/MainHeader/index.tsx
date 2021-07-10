import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/Search";
import { motion, useCycle } from "framer-motion";

//components
import MenuToggleButton from "./MenuToggleButton";
import Navigation from "./Navigation";

const MainHeader = () => {
  const router = useRouter();

  const [menu, setMenu] = React.useState<boolean>(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Wrap>
      <MainTitleContainer onClick={() => router.push("/")}>
        <Title>The Deliver</Title>
      </MainTitleContainer>
      <Container menu={menu}>
        <Item>
          <Link href="/about">
            <LinkTitle>ABOUT</LinkTitle>
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
      </Container>
      <IconWrap>
        <Item>
          <SearchIcon />
        </Item>
      </IconWrap>
      <Menubar onClick={() => setMenu(!menu)}>
        <Nav initial={false} animate={isOpen ? "open" : "closed"}>
          <MenuToggleButton toggle={() => toggleOpen()} />
        </Nav>
      </Menubar>
    </Wrap>
  );
};

export default MainHeader;

const Wrap = styled.div`
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    padding: 0px;
  }
`;

const Container = styled.div<{ menu: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;

  @media screen and (max-width: 680px) {
    position: absolute;
    right: 0px;
    top: 90px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    border-radius: 3px;
    /* transition-delay: 0.5s; */
    z-index: 9;

    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};

    div:nth-child(6) {
      display: none;
    }

    > div {
      margin: 20px;
    }
  }
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;

  @media screen and (max-width: 680px) {
    padding-left: 20px;
  }
`;

const Title = styled.h1`
  font-family: "Fredoka One", cursive;
  font-weight: "400";
  font-size: 30px;
  display: flex;
  white-space: pre;
`;

const Menubar = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: relative;
  right: 32px;
  height: 97px;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const IconWrap = styled.div`
  @media screen and (max-width: 680px) {
    padding-left: 20px;
    display: none;
  }

  @media screen and (max-width: 990px) {
    padding-left: 20px;
    display: none;
  }
`;

const Nav = styled(motion.nav)`
  position: relative;
  > button {
    background-color: transparent;
    border: none;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 350px;
`;
