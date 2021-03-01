import React from "react";
import styled, { css } from "styled-components";
import { transform } from "typescript";

//components
import MainHeader from "../../components/MainHeader";

const Main = () => {
  const [move, setMove] = React.useState<number>(0);
  React.useEffect(() => {
    setMove(move + 30);
    if (document.body.clientWidth < move) {
      setMove(0);
    }
  }, [move]);
  return (
    <>
      <MainHeader />
      <Wrap>
        <Container>
          <BannerWrap>
            <BannerContainer>
              <MoveImg
                moveNum={move}
                src={
                  "https://media0.giphy.com/media/ZyiYUjOBlIfwccwwd2/giphy.gif"
                }
                alt="delivery gif"
              />
            </BannerContainer>
          </BannerWrap>
        </Container>
      </Wrap>
    </>
  );
};

export default Main;

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
  height: 820px;
  background-color: #000;
`;

const BannerText = styled.p``;

const MoveImg = styled.img<{ moveNum?: number }>`
  ${(props) =>
    props.moveNum &&
    css`
      transition: all ease 2s 0s;
      transform: translateX(${props.moveNum}px);
    `}
`;
