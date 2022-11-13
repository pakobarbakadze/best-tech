import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import TotalPrice from "../TotalPrice/TotalPrice";

import classes from "./CartDropdown.module.css";

const CartDropdown = () => {
  const cart = useSelector((state) => state.persistedStore.cartReducer.items);

  const navigate = useNavigate();

  if (cart?.length === 0)
    return (
      <div className={classes.container}>
        <h1 className={classes.empty}>Cart is empty</h1>
      </div>
    );

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        <span>My bag</span>, {cart.length} items
      </h1>
      <div className={classes.items}>
        {cart?.map((item, index) =>(
          <CartItem
          key={index}
          item={item}
        ></CartItem>
        ))}
      </div>
      <div className={classes.footer}>
        <div className={classes.price}>
          <h1>Total</h1>
          <TotalPrice id="CartDropdown"/>
        </div>
        <div className={classes.buttons}>
          <button
            className={classes["view_bag"]}
            onClick={() => navigate(`/cart`)}
          >
            VIEW BAG
          </button>
          <button>CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
