import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

//components
import MainHeader from "../../components/MainHeader";

//image
// import BannerImg from "../../public/images/banner/BannerImage.png";

const MainContainer = () => {
  const [move, setMove] = React.useState<number>(0);

  React.useEffect(() => {
    // console.log(window.innerWidth);
    setMove(window.innerWidth);
  }, []);

  return (
    <>
      <MainHeader />
      <Wrap>
        <Container>
          <BannerWrap>
            <BannerContainer>
              <MoveImg width={move} />
              <BannerTextWrap>
                <BannerTitle>
                  Do you want <br /> checking Delivery?
                </BannerTitle>
                <Link href="/deliver">
                  <BannerText>Checking Now</BannerText>
                </Link>
              </BannerTextWrap>
            </BannerContainer>
          </BannerWrap>
        </Container>
      </Wrap>
    </>
  );
};

export default MainContainer;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 670px;
  background-color: #000;
`;

const BannerTextWrap = styled.div`
  padding-left: 100px;
`;

const BannerTitle = styled.p`
  font-family: "Fjalla One", sans-serif;
  color: #fff;
  line-height: 68px;
  font-size: 50px;
  margin: 0px;
`;

const BannerText = styled.button`
  margin-top: 70px;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  color: #b181b7;
  background-color: #000;
  font-family: "Fjalla One", sans-serf;
  font-weight: 400;
  font-size: 40px;
  :hover {
    cursor: pointer;
  }
`;

const MoveImg = styled.div<{ width?: number }>`
  width: 100%;
  height: 250px;
  margin-top: 100px;
  background: url("https://okean.ch/user/pages/03.delivery/delivery01.png")
    no-repeat 0 / 100% auto;
  background-size: 360px;

  animation: ani 10s linear infinite;

  @keyframes ani {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100vw 0;
    }
  }
`;
