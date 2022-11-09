import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "./Login.module.css";

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
        console.log(res);
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
        <h1>ავტორიზაცია</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="email">ელ. ფოსტა</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">პაროლი</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>შესვლა</button>
        </form>
      </div>
      <div className={classes.register}>
        <h1>არ გაქვთ ანგარიში ?</h1>
        <h2>ახალი მომხმარებლის რეგისტრაცია</h2>
        <h3>
          პირადი ანგარიშით თქვენ შეძლებთ პროდუქციის კალათაში დამატებას, სახლიდან
          გაუსვლელად ყიდვას და შეკვეთის სტატუსის შემოწმებას
        </h3>
        <Link to="/register">გაგრძელება</Link>
      </div>
    </div>
  );
};

export default Login;
