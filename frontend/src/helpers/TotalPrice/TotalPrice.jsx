import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import classes from "./TotalPrice.module.css";

const TotalPrice = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.persistedStore.cartReducer.items);

  useEffect(() => {
    let sum = 0;
    cart?.map(
      (item) =>
        (sum += item.cartQuantity * item.price)
    );
    setTotalPrice(sum);
    // eslint-disable-next-line
  }, [cart]);
  
  return (
    <div id={classes[props.id]}>
      {props.id === "Tax" ? (
        <h1>{`${
          Math.round(((totalPrice * 21) / 100 + Number.EPSILON) * 100) / 100
        }${'ლ'}`}</h1>
      ) : (
        <h1>{`${
          Math.round((totalPrice + Number.EPSILON) * 100) / 100
        }${'ლ'}`}</h1>
      )}
    </div>
  );
};

export default TotalPrice;
