import React from "react";

import classes from "./Product.module.css";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../api/DummyData";

const Product = () => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Product;
