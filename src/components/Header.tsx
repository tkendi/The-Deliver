import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrap>
          <Title>택배조회 서비스</Title>
      </Wrap>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: #0b44d9;
  align-items: flex-end;
`;

const Title = styled.h1`
    color: #fff;  
`;