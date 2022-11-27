import React from "react";
import { NavLink, useParams } from "react-router-dom";

import classes from "./CheckoutSteps.module.css";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { step } = useParams();

  return (
    <div className={classes.container}>
      <div className={classes.link}>
        {step1 ? (
          <NavLink to="/login">Authentication</NavLink>
        ) : (
          <h1>Authentication</h1>
        )}
      </div>
      <div className={classes.link} id={step === "2" ? classes.selected : ""}>
        {step2 ? (
          <NavLink to="/order/2/shipping">Shipping</NavLink>
        ) : (
          <h1>Shipping</h1>
        )}
      </div>
      <div className={classes.link} id={step === "3" ? classes.selected : ""}>
        {step3 ? (
          <NavLink to="/order/3/payment">Payment</NavLink>
        ) : (
          <h1>Payment</h1>
        )}
      </div>
      <div className={classes.link} id={step === "4" ? classes.selected : ""}>
        {step4 ? <NavLink to="/login">Order</NavLink> : <h1>Order</h1>}
      </div>
    </div>
  );
};

export default CheckoutSteps;
