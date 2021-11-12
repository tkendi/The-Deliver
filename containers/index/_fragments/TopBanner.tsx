import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const TopBanner = () => {
  return (
    <BannerWrap>
      <BannerContainer>
        <BannerTextWrap>
          <BannerTitle>
            Do you want <br /> checking Delivery?
          </BannerTitle>
          <p style={{ color: "#fff", fontSize: 20, marginBottom: 50 }}>
            is simply dummy text of the printing and typesetting industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text
            <br /> ever since the 1500s,
          </p>
        </BannerTextWrap>
        <MoveImg />
        <LinkContainer>
          <Link href="/deliver">
            <BannerText style={{ paddingLeft: 0 }}>Checking Now</BannerText>
          </Link>
          <Link href="/about">
            <BannerText another={true}>ABout Now</BannerText>
          </Link>
        </LinkContainer>
      </BannerContainer>
    </BannerWrap>
  );
};

export default TopBanner;

const BannerWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  padding: 30px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 94vh;
  max-height: 840px;
  background-color: #000;

  @media screen and (max-width: 680px) {
    align-items: center;
    height: 400px;
    padding: 40px 20px;
    padding-bottom: 0px;
  }
`;

const BannerTextWrap = styled.div`
  margin-top: 50px;
  padding-left: 30px;
  z-index: 99;

  @media screen and (max-width: 680px) {
    padding: 0px;
  }
`;

const BannerTitle = styled.h1`
  font-family: "Fjalla One", sans-serif;
  color: #3cc;
  /* line-height: px; */
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BannerText = styled.button<{ another?: boolean }>`
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  color: #b181b7;
  background-color: transparent;
  font-family: "Fjalla One", sans-serf;
  font-weight: 400;
  font-size: 25px;
  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.another &&
    css`
      color: #88bbff;
    `}
`;

const MoveImg = styled.div<{ width?: number }>`
  position: absolute;
  bottom: 200px;
  right: 100px;
  width: 650px;
  height: 320px;
  background: url("https://okean.ch/user/pages/03.delivery/delivery01.png")
    no-repeat;
  background-size: cover;

  animation-name: truck;
  animation-duration: 4.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;

  @keyframes truck {
    0% {
      left: -10px;
      bottom: 200px;
    }
    100% {
      left: 2000px;
      bottom: 150px;
    }
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 70px;
  left: 55px;
`;
