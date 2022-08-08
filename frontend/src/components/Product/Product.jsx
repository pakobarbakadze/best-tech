import React,{ useState, useEffect } from "react";
import axios from "axios";

import classes from "./Product.module.css";

import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products').then((res) =>{
      setProducts(res.data)
    }).catch((e) =>{
      console.log(e)
    })
  })
  
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Product;
