import React from "react";
import styled from "styled-components";

//components
import MainHeader from "components/MainHeader";
import TopBanner from "./_fragments/TopBanner";
import MiddleBanner from "./_fragments/MiddleBanner";

const MainContainer = () => {
  return (
    <>
      <MainHeader />
      <Wrap>
        <Container>
          <TopBanner />
          <MiddleBanner />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
