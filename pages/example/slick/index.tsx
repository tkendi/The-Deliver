import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // 넘어가는 속도
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "300px",
    // nextArrow: "none",
    // prevArrow: "none",
  };

  const sliders = [
    { id: 1, image: "https://source.unsplash.com/random/690x386" },
    { id: 2, image: "https://source.unsplash.com/random/690x386" },
    { id: 3, image: "https://source.unsplash.com/random/690x386" },
    { id: 4, image: "https://source.unsplash.com/random/690x386" },
    { id: 5, image: "https://source.unsplash.com/random/690x386" },
    { id: 6, image: "https://source.unsplash.com/random/690x386" },
  ];

  return (
    <Container>
      <SlideTitle>인기 서비스</SlideTitle>
      <StyledSlider {...settings}>
        {sliders.map(({ id, image }: any, index: number) => {
          return (
            <CardBox key={id}>
              <CardImg alt="인기 서비스" src={image} />
              <CardText>{index}</CardText>
            </CardBox>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

export default Slide;

const SlideTitle = styled.h2`
  padding: 60px 0px 50px 0px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    max-width: 700px;
    /* width: 100%; */
    margin: auto;
  }

  .slick-slide div {
    /* cursor: pointer; */
  }

  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }

  .slick-track {
    /* max-width: 800px; */
  }

  @media screen and (max-width: 680px) {
    .slick-list {
      width: 100%;
      margin: auto;
    }
  }
`;

const Container = styled.div`
  margin-right: 25px;
`;

const CardBox = styled.div`
  width: calc(100% / 6);
  height: max-content;
  cursor: pointer;
`;

const CardImg = styled.img`
  max-width: 450px;
  height: 386px;
  margin: auto;

  @media screen and (max-width: 680px) {
    /* display: flex;
    flex-flow: column; */
    max-width: 200px;
  }
`;

const CardText = styled.p`
  /* padding: 20px; */
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
