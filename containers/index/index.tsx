import React from "react";
import styled from "styled-components";

//components
import MainHeader from "../../components/MainHeader";
import TopBanner from './_fragments/TopBanner'

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
          <TopBanner />
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

