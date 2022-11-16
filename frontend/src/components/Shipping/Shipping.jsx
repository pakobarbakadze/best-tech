import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../redux/ConfigureStore.Cart.js";

import classes from './Shipping.module.css'

const Shipping = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setCity] = useState(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
  const [country, setCountry] = useState(shippingAddress?.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.setAddress({ address, city, postalCode, country }));
  };
  return (
    <div className={classes.container}>
      <h1>Shipping</h1>
      <form>
        <div className={classes.input}>
          <label htmlFor="firstName">მისამართი</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="სახელი"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="firstName">ქალაქი</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="ქალაქი"
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
          <label htmlFor="firstName">ქვეყანა</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="ქვეყანა"
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
