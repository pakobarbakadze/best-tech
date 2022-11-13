import React from "react";
import { useSelector } from "react-redux";

import SectionDivider from "../../helpers/SectionDivider/SectionDivider";
import CartItem from "../CartItem/CartItem";
import TotalPrice from "../../ui/TotalPrice/TotalPrice";

import classes from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer.items);
  console.log(cart)

  return (
    <div className={classes.section}>
      <h1 className={classes.header}>CART</h1>
      <div className={classes.items}>
        {cart.map((item, index) => (
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
          <h1>Tax 21%: </h1>
          <h1>Quantity: </h1>
          <h1>Total: </h1>
        </div>
        <div className={classes.right}>
          <TotalPrice id="Tax" />
          <h3>{cart.length}</h3>
          <TotalPrice id="Bag" />
        </div>
      </div>
      <button className={classes["order_button"]}>ORDER</button>
    </div>
  );
};

export default Cart;
