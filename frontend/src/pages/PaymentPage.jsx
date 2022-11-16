import React from "react";

import Payment from "../components/Payment/Payment";
import CheckoutSteps from "../components/CheckoutSteps/CheckoutSteps";

const PaymentPage = () => {
  return (
    <>
      <CheckoutSteps step1 step2 />
      <Payment />
    </>
  );
};

export default PaymentPage;
