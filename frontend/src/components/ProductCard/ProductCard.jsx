import React from "react";
import { Link } from 'react-router-dom'

import classes from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img src={product.image} alt="preview" />
        <Link to={`/product/${product._id}`}>{product.name}</Link>
        <h2>{`${product.price}.00₾`}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
