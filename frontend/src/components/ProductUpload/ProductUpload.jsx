import React, { useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import classes from "./ProductUpload.module.css";

import SubmitButton from "../../ui/SubmitButton/SubmitButton";

const ProductUpload = () => {
  const initData = {
    name: "",
    images: [""],
    brand: "",
    category: "",
    description: "",
    price: "",
  };
  const [formData, setFormData] = useState(initData);

  const user = useSelector((state) => state.persistedStore.userReducer.user);

  const inputHandler = (e) => {
    if (e.target.id !== "images") {
      const newData = { ...formData };
      newData[e.target.id] = e.target.value;
      setFormData(newData);
    } else {
      const newData = { ...formData };
      newData[e.target.id][0] = e.target.value;
      setFormData(newData)
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const config = { Authorization: `Bearer ${user.token}` };

    axios
      .post("/api/products", formData, { headers: config })
      .then((res) => {
        console.log(res);
        setFormData(initData);
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
          id="name"
          placeholder="სახელი"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.name}
        />
        <input
          type="text"
          id="images"
          placeholder="ფოტოს url"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.images[0]}
        />
        <input
          type="text"
          id="brand"
          placeholder="ბრენდი"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.brand}
        />
        <input
          type="text"
          id="category"
          placeholder="კატეგორია"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.category}
        />
        <input
          type="text"
          id="description"
          placeholder="აღწერა"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.description}
        />
        <input
          type="number"
          id="price"
          placeholder="ფასი"
          autoComplete="off"
          onChange={(e) => inputHandler(e)}
          value={formData.price}
        />
        <div className={classes.btn}><SubmitButton>ატვირთვა</SubmitButton></div>
      </form>
    </div>
  );
};

export default ProductUpload;
