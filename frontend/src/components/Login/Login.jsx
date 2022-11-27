import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "./Login.module.css";

import SubmitButton from "../../ui/SubmitButton/SubmitButton";

import { userActions } from "../../redux/ConfigureStore.User";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch(userActions.setState(res.data));
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <h1>Authentication</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="email">Mail</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.btn}><SubmitButton>Login</SubmitButton></div>
        </form>
      </div>
      <div className={classes.register}>
        <h1>Don't have account ?</h1>
        <h2>Register new account</h2>
        <h3>
          With account you will be able to shop faster, place order on items in your cart,
          check your order history and many more.
        </h3>
        <Link to="/register">Continue</Link>
      </div>
    </div>
  );
};

export default Login;
