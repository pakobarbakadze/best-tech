import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { cartActions } from "../../redux/ConfigureStore.Cart.js";
import SubmitButton from "../../ui/SubmitButton/SubmitButton.jsx";

import classes from "./Shipping.module.css";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.saveShippingAddress({ address, city, postalCode, country }));
    navigate("/order/3/payment");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="firstName">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="firstName">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="City"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="firstName">postal code</label>
          <input
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            type="text"
            placeholder="postal code"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="firstName">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Country"
          />
        </div>
        <div className={classes.btn}>
          <SubmitButton>Next</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
