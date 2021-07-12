import React from "react";
import styled from "styled-components";

const MiddleBanner = () => {
  return (
    <Wrap>
      <BorderDiv>
        <h1>
          Why use?
          <div />
        </h1>
      </BorderDiv>
      <ImageWrap>
        <img src={`/images/main/DeliveryGuy.png`} />
        <div>
          <h1>Easy to Use</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </ImageWrap>
    </Wrap>
  );
};

export default MiddleBanner;

const Wrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const BorderDiv = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  > h1 {
    font-size: 26px;
    > div {
      position: absolute;
      left: 10px;
      bottom: 20px;
      width: 120px;
      border: 5px solid #f00;
      border-radius: 10px;
      opacity: 0.5;
      z-index: -1;
    }
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  > img {
    width: 300px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h1 {
      margin: 0px;
    }
    width: 50%;
    padding: 0px 20px;
    border-left: 3px solid #efefef;
    text-overflow: ellipsis;
    overflow: hidden;
    > p {
      line-height: 30px;
    }
  }

  @media screen and (max-width: 680px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    > img {
      margin: 0px;
      width: 150px;
      height: 150px;
    }
    > div {
      margin-top: 10px;
      width: 30%;
      border: none;
      border-top: 5px solid #efefef;
      > p {
        display: none;
      }
      > h1 {
        text-align: center;
      }
    }
  }
`;
