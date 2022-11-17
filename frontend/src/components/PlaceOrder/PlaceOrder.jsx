import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import classes from "./PlaceOrder.module.css";

import SubmitButton from "../../ui/SubmitButton/SubmitButton";

const PlaceOrder = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const user = useSelector((state) => state.persistedStore.userReducer.user);

  const orderClickHandler = () => {
    const bodyParameters = {
      orderItems: cart.items,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice: cart.itemsPrice,
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: cart.itemsPrice,
    };

    const config = { Authorization: `Bearer ${user.token}` };

    axios.post("/api/orders", bodyParameters, { headers: config })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.shipping}>
          <h1>shipping</h1>
          <h2>{`Name : ${user?.userData?.firstName} ${user?.userData?.lastName}.`}</h2>
          <h2>{`Email : ${user?.userData?.email}`}</h2>
          <h2>{`Address : ${cart?.shippingAddress.address}, ${cart?.shippingAddress.city} ${cart?.shippingAddress.postalCode}, ${cart?.shippingAddress.country}.`}</h2>
        </div>
        <div className={classes.payment}>
          <h1>payment method</h1>
          <h2>{`Method : ${cart?.paymentMethod}`}</h2>
        </div>
        <div className={classes.orderItems}>
          <ul>
            {cart?.items.map((item, index) => (
              <li key={index}>
                <img src={item.images[0]} alt="item icon" />
                <h2>{item.name}</h2>
                <h3>{`${item.cartQuantity} x ${item.price} ₾ = ${
                  item.cartQuantity * item.price
                } ₾`}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.right}>
        <h1>order summary</h1>
        <ul>
          <li>
            <h2>Items</h2> <h3>{`${cart?.itemsPrice} ₾`}</h3>
          </li>
          <li>
            <h2>Shipping</h2> <h3>0 ₾</h3>
          </li>
          <li>
            <h2>Tax</h2> <h3>0 ₾</h3>
          </li>
        </ul>
        <div className={classes.total}>
          <h2>Total</h2>
          <h3>{`${cart?.itemsPrice} ₾`}</h3>
        </div>
        <div className={classes.btn} onClick={orderClickHandler}>
          <SubmitButton>Order</SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
