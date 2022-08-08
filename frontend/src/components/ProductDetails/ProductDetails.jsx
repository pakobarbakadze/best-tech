import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { _id } = useParams();
  const [products, setProducts] = useState()
  const [counter, setCounter] = useState(1);
  const product = products.find((p) => p._id === _id);

  useEffect(() => {
    axios.get('/api/products').then((res) =>{
      setProducts(res)
    }).catch((e) =>{
      console.log(e)
    })
  }, [])

  const decHandler = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const incHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>{product.name}</h1>
        <h2>{`პროდუქტის კოდი: ${product._id}`}</h2>
      </div>
      <div className={classes.preview}>
        <img src={product.image} alt="preview" />
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
        </div>
      </div>
      <div className={classes.specification}></div>
    </div>
  );
};

export default ProductDetails;
