import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

//components
import MainHeader from "../../components/MainHeader";

const MainContainer = () => {
  // const [move, setMove] = React.useState<number>(0);

  // React.useEffect(() => {
  //   setMove(window.innerWidth);
  // }, []);

  return (
    <>
      <MainHeader />
      <Wrap>
        <Container>
          <BannerWrap>
            <BannerContainer>
              <MoveImg />
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
                <Link href="/deliver">
                  <BannerText style={{ paddingLeft: 0 }}>
                    Checking Now
                  </BannerText>
                </Link>
                <Link href="/about">
                  <BannerText another={true}>ABout Now</BannerText>
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
  /* padding: 0px 20px; */
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
  padding: 30px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  background-color: #000;

  @media screen and (max-width: 680px) {
    align-items: center;
    height: 400px;
    padding: 40px 20px;
    padding-bottom: 0px;
  }
`;

const BannerTextWrap = styled.div`
  padding-left: 30px;
  z-index: 9999 ;

  @media screen and (max-width: 680px) {
    padding: 0px;
  }
`;

const BannerTitle = styled.p`
  font-family: "Fjalla One", sans-serif;
  color: #3cc;
  /* line-height: px; */
  font-size: 28px;
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
  top: 100px;
  right: 100px;
  width: 360px;
  height: 250px;
  background: url("https://okean.ch/user/pages/03.delivery/delivery01.png")
    no-repeat;
  background-size: 360px;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;
