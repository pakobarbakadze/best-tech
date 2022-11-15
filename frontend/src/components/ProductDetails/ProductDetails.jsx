import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/ConfigureStore.Cart.js";

import SubmitButton from "../../ui/SubmitButton/SubmitButton";

import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`/api/products/${_id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [_id]);

  const decHandler = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const incHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ ...product, cartQuantity: counter }));
  };

  if (product)
    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>{product.name}</h1>
          <h2>{`პროდუქტის კოდი: ${product._id}`}</h2>
        </div>
        <div className={classes.preview}>
          <img src={product.images[0]} alt="preview" />
          <h1>{`ფასი: ${product.price}.00ლ`}</h1>
          <div className={classes.add}>
            <h1>რაოდენობა</h1>
            <div className={classes.quantity}>
              <button className={classes.dec} onClick={decHandler}>
                -
              </button>
              <h2>{counter}</h2>
              <button className={classes.inc} onClick={incHandler}>
                +
              </button>
            </div>
            <div className={classes.btn} onClick={addToCartHandler}>
              <SubmitButton text="კალათაში დამატება" />
            </div>
          </div>
        </div>
        <div className={classes.specification}></div>
      </div>
    );
  else return <>loading product</>;
};

export default ProductDetails;
