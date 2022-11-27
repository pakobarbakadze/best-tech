import React, { useState } from "react";
import axios from "axios";

import SubmitButton from "../../ui/SubmitButton/SubmitButton";

import classes from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pId, setPId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");

    if (password === repeatPassword) {
      axios
        .post("/api/users", {
          firstName: firstName,
          lastName: lastName,
          pId: pId,
          email: email,
          phone: phone,
          password: password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Passwords dont match");
    }
  };

  return (
    <div className={classes.container}>
      <h1>Register new account</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.info}>
          <h2>Private information</h2>
          <div className={classes.input}>
            <label htmlFor="firstName">Firstname</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Firstname"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="lastName">Lastname</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Lastname"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="id">ID</label>
            <input
              value={pId}
              onChange={(e) => setPId(e.target.value)}
              type="text"
              placeholder="ID"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="firstName">Phone number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div className={classes.login}>
          <h2>Authentication</h2>
          <div className={classes.input}>
            <label htmlFor="firstName">Mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="mail"
              placeholder="Mail"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="firstName">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="firstName">Repeat password</label>
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              type="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
        <div className={classes.btn}>
          <SubmitButton>Register</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
