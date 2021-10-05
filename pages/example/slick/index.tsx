import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Item>
            <h3>1</h3>
          </Item>
          <Item>
            <h3>2</h3>
          </Item>
          <Item>
            <h3>3</h3>
          </Item>
          <Item>
            <h3>4</h3>
          </Item>
          <Item>
            <h3>5</h3>
          </Item>
          <Item>
            <h3>6</h3>
          </Item>
        </Slider>
      </div>
    );
  }
}

const Item = styled.div`
  width: calc(100% / 6);
  background-color: rgba(122, 50, 255, 0.1);
`;
