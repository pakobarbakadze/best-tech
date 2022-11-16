import React from "react";

import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";
import Shipping from "../components/Shipping/Shipping";

const ShippingPage = () => {

  return (
    <>
      <CheckoutSteps step1 step2 />
      <Shipping/>
    </>
  );
};

export default ShippingPage;
