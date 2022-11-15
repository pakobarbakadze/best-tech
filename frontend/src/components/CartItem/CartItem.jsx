import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/ConfigureStore.Cart";

import LeftArrow from "../../icons/left-arrow.svg";
import RightArrow from "../../icons/right-arrow.svg";

import classes from "./CartItem.module.css";

const CartItem = ({ item, arrows, from }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
    //when product was removed from cart next product's photo preview was bugging, so i had to reset index to 0
  }, [item]);

  const dispatch = useDispatch();
  const increaseQuantityHandler = (item) => {
    dispatch(cartActions.increaseQuantity(item));
  };

  const decreaseQuantityHandler = (item) => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  const nextPhoto = () => {
    if (photoIndex < item.images.length - 1) {
      setPhotoIndex((prev) => prev + 1);
    }
  };

  const prevPhoto = () => {
    if (photoIndex > 1) {
      setPhotoIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.info} id={from === "Bag" ? classes.bag : ""}>
        <h1>{item.brand}</h1>
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
      </div>
      <div className={classes["right_panel"]}>
        <div className={classes.counter} id={from === "Bag" ? classes.bag : ""}>
          <button onClick={() => increaseQuantityHandler(item)}>+</button>
          <h1>{item.cartQuantity}</h1>
          <button onClick={() => decreaseQuantityHandler(item)}>-</button>
        </div>
        <img
          src={photoIndex ? item.images[photoIndex] : item.images[0]}
          alt="product preview"
          className={classes.prevPhoto}
          id={from === "Bag" ? classes.bag : ""}
        />
        {arrows ? (
          <div className={classes.arrows}>
            <img src={LeftArrow} alt="left arrow" onClick={() => prevPhoto()} />
            <img
              src={RightArrow}
              alt="right arrow"
              onClick={() => nextPhoto()}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItem;
