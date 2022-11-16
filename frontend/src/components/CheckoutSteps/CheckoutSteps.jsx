import React from "react";
import { NavLink, useParams } from "react-router-dom";

import classes from "./CheckoutSteps.module.css";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { step } = useParams();

  return (
    <div className={classes.container}>
      <div className={classes.link}>
        {step1 ? (
          <NavLink to="/login">ავტორიზაცია</NavLink>
        ) : (
          <h1>ავტორიზაცია</h1>
        )}
      </div>
      <div className={classes.link} id={step === "2" ? classes.selected : ""}>
        {step2 ? (
          <NavLink to="/order/2/shipping">შიპინგი</NavLink>
        ) : (
          <h1>შიპინგი</h1>
        )}
      </div>
      <div className={classes.link} id={step === "3" ? classes.selected : ""}>
        {step3 ? (
          <NavLink to="/order/3/payment">გადახდა</NavLink>
        ) : (
          <h1>გადახდა</h1>
        )}
      </div>
      <div className={classes.link} id={step === "4" ? classes.selected : ""}>
        {step4 ? <NavLink to="/login">შეკვეტა</NavLink> : <h1>შეკვეთა</h1>}
      </div>
    </div>
  );
};

export default CheckoutSteps;
