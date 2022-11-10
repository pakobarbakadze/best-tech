import React, { useState } from "react";
import axios from "axios";

import classes from "./ProductUpload.module.css";

const ProductUpload = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/api/products", {
        name: name,
        images: [image],
        brand: brand,
        category: category,
        description: description,
        price: price,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.container}>
      <h1>ახალი პროდუქტის ატვირთვა</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="სახელი"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="images"
          placeholder="ფოტოს url"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="brand"
          placeholder="ბრენდი"
          onClick={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="კატეგორია"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="აღწერა"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="ფასი"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>ატვირთვა</button>
      </form>
    </div>
  );
};

export default ProductUpload;
