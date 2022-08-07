import React from "react";

import classes from "./Product.module.css";

import ProductCard from "../ProductCard/ProductCard";

const products = [
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  {
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/518905_BB_00_FB/image.jpg',
    name: "charger",
    price: 30
  },
  
];

const Product = () => {
  return <div className={classes.container}>
    {products.map(product => (
        <ProductCard product={product}></ProductCard>
    ))}
  </div>;
};

export default Product;
