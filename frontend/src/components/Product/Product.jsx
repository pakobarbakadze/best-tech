import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import classes from "./Product.module.css";

import ProductCard from "../ProductCard/ProductCard";

const Product = () => {
  const { category } = useParams();
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

  const filteredList = useMemo(() => {
    if (data && category) {
      return data.products?.filter((item) => item.category === category);
    } else if (data && !category) return data.products;
  }, [category, data]);

  if (filteredList?.length !== 0)
    return (
      <div className={classes.container}>
        {filteredList ? (
          filteredList.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
  else
    return (
      <div>
        <h1>მითითებულ კატეგორიაში პროდუქცია არ არსებობს</h1>
      </div>
    );
};

export default Product;
