import React from "react";

//components
import MainHeader from "../../components/MainHeader";
import DeliveryParsing from "../../components/deliveryParsing";
import Header from "../../components/DeliverTrackingHeader";

const DeliverContainer = () => {
  return (
    <>
      <MainHeader />
      <Header />
      <DeliveryParsing />
    </>
  );
};

export default DeliverContainer;
