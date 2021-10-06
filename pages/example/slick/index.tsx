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
  };

  const sliders = [
    { name: "1", image: "https://source.unsplash.com/random/690x386" },
    { name: "2", image: "https://source.unsplash.com/random/690x386" },
    { name: "3", image: "https://source.unsplash.com/random/690x386" },
    { name: "4", image: "https://source.unsplash.com/random/690x386" },
    { name: "5", image: "https://source.unsplash.com/random/690x386" },
    { name: "6", image: "https://source.unsplash.com/random/690x386" },
  ];

  return (
    <Container>
      <SlideTitle>인기 서비스</SlideTitle>
      <StyledSlider {...settings}>
        {sliders.map(({ name, image }: any) => {
          return (
            <CardBox>
              <CardImg alt="인기 서비스" src={image} />
              <CardText>{name}</CardText>
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
    max-width: 690px;
    /* width: 1600px; */
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
    /* overflow-x: hidden; */
  }
`;

const Container = styled.div`
  margin-right: 25px;
`;

const CardBox = styled.div`
  max-width: 600px;
  height: max-content;
  cursor: pointer;
`;

const CardImg = styled.img`
  max-width: 600px;
  height: 386px;
  margin: auto;
`;

const CardText = styled.p`
  /* padding: 20px; */
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
