import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./Product.module.css";

import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); 

  return (
    <div className={classes.container}>
      {data.products ? (
        data.products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Product;
