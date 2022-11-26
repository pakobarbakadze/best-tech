import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";
import CartItem from "../CartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const [itemsPrice, setItemsPrice] = useState(cart?.itemsPrice || 0);

  const navigate = useNavigate();

  useEffect(() => {
    setItemsPrice(cart?.itemsPrice);
  }, [cart]);

  const orderClickHandler = () => {
    navigate("/order/2/shipping");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>CART</h1>
      <div className={classes.items}>
        {cart?.items.map((item, index) => (
          <div key={index}>
            <SectionDivider />
            <div className={classes["item_card"]}>
              <CartItem item={item} arrows={true} from={"Bag"}></CartItem>
            </div>
          </div>
        ))}
        <SectionDivider />
      </div>
      <div className={classes.order}>
        <ul>
          <li>
            <h1>Quantity: </h1>
            <h3>{cart?.items.length}</h3>
          </li>
          <li>
            <h1>Total: </h1>
            <h3>{`${itemsPrice} ₾`}</h3>
          </li>
        </ul>
      </div>
      <button className={classes["order_button"]} onClick={orderClickHandler}>
        ORDER
      </button>
    </div>
  );
};

export default Cart;
