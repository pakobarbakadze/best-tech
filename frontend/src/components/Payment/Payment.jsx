import React, { useState } from "react";
import SubmitButton from "../../ui/SubmitButton/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import classes from "./Payment.module.css";

import { cartActions } from "../../redux/ConfigureStore.Cart.js";

const Payment = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const navigate = useNavigate()
  const [selected, setSelected] = useState(cart?.paymentMethod || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.savePaymentMethod(selected))
    navigate('/order/4/place')
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <label>PayPal</label>
        <input
          type="checkbox"
          name="paypal"
          value="paypal"
          checked={selected === "paypal"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <div className={classes.btn}>
          <SubmitButton>შემდეგი</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Payment;
