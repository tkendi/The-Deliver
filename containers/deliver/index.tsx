import React from "react";
import styled from "styled-components";

//components
import MainHeader from "components/MainHeader";
import DeliveryParsing from "containers/deliver/_fragments/deliveryParsing";
import Header from "containers/deliver/_fragments/DeliverTrackingHeader";

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
