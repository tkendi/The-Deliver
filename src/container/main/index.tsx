import React from "react";
import DeliveryParsing from "../../components/deliveryParsing";
import Header from "../../components/Header";
import { deliverDataParsing, deliveryInfo } from "../../lib/api";

const Main = () => {
  const [deliverInfo, setDeliverInfo] = React.useState({});

  React.useEffect(() => {
    deliveryInfo().then((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <div>
        <DeliveryParsing />
      </div>
    </>
  );
};

export default Main;
