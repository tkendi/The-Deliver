import React from "react";
import styled from "styled-components";

//components
import MainHeader from "components/MainHeader";
import DeliveryParsing from "components/deliveryParsing";
import Header from "components/DeliverTrackingHeader";

const DeliverContainer = () => {
  return (
    <>
      <MainHeader />
      <Container>
        <Header />
        <DeliveryParsing />
      </Container>
    </>
  );
};

export default DeliverContainer;

const Container = styled.div`
  padding: 0px 30px;
`;
