import React from "react";

import classes from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img src={product.image} alt="preview" />
        <h1>{product.name}</h1>
        <h2>{`${product.price}.00₾`}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
