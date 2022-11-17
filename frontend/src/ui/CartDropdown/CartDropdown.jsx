import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";

import classes from "./CartDropdown.module.css";

const CartDropdown = (props) => {
  const cart = useSelector((state) => state.persistedStore.cartReducer);
  const [itemsPrice, setItemsPrice] = useState(cart?.itemsPrice || 0)

  const navigate = useNavigate();

  useEffect(() => {
    setItemsPrice(cart?.itemsPrice)
  }, [cart])
  

  const viewBagClickHandler = () => {
    navigate(`/cart`)
    props.changeState()
  }

  if (cart?.items.length === 0)
    return (
      <div className={classes.container}>
        <h1 className={classes.empty}>Cart is empty</h1>
      </div>
    );

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        <span>My bag</span>, {cart?.items.length} items
      </h1>
      <div className={classes.items}>
        {cart?.items.map((item, index) =>(
          <CartItem
          key={index}
          item={item}
        ></CartItem>
        ))}
      </div>
      <div className={classes.footer}>
        <div className={classes.price}>
          <h1>Total</h1>
          <h2>{itemsPrice}</h2>
        </div>
        <div className={classes.buttons}>
          <button
            className={classes["view_bag"]}
            onClick={viewBagClickHandler}
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
