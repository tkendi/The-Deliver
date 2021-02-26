import React from "react";
import DeliveryParsing from "../../components/deliveryParsing";
import Header from "../../components/Header";

const Main = () => {
  const [deliverInfo, setDeliverInfo] = React.useState({});


  return (
    <>
      <Header />
      <>
        <DeliveryParsing />
      </>
    </>
  );
};

export default Main;
