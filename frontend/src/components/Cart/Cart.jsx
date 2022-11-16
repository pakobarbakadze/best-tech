import React from "react";
import { useSelector } from "react-redux";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";
import CartItem from "../CartItem/CartItem";
import TotalPrice from "../../helpers/TotalPrice/TotalPrice";

import classes from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer);

  const orderClickHandler = () => {
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
        <div className={classes.left}>
          <h1>Quantity: </h1>
          <h1>Total: </h1>
        </div>
        <div className={classes.right}>
          <h3>{cart?.items.length}</h3>
          <TotalPrice id="Bag" />
        </div>
      </div>
      <button className={classes["order_button"]} onClick={orderClickHandler}>
        ORDER
      </button>
    </div>
  );
};

export default Cart;
