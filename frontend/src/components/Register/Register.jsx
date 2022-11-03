import React, { useState } from "react";
import axios from "axios";

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
      console.log({ firstName, lastName, pId, email, phone, password });

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
      console.log("პაროლები არ ემთხვევა");
    }
  };

  return (
    <div className={classes.container}>
      <h1>ახალი ანგარიშის რეგისტრაცია</h1>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.info}>
            <h2>პირადი ინფორმაცია</h2>
            <div className={classes.input}>
              <label htmlFor="firstName">სახელი</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="სახელი"
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="lastName">გვარი</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="გვარი"
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="id">პირადი ნომერი</label>
              <input
                value={pId}
                onChange={(e) => setPId(e.target.value)}
                type="text"
                placeholder="პირადი ნომერი"
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="firstName">ტელეფონი</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="ტელეფონი"
              />
            </div>
          </div>

          <div className={classes.login}>
            <h2>ავტორიზაცია</h2>
            <div className={classes.input}>
              <label htmlFor="firstName">ელ. ფოსტა</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="mail"
                placeholder="ელ. ფოსტა"
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="firstName">პაროლი</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="პაროლი"
              />
            </div>
            <div className={classes.input}>
              <label htmlFor="firstName">გაიმეორეთ პაროლი</label>
              <input
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type="password"
                placeholder="პაროლი"
              />
            </div>
          </div>
          <button>რეგისტრაცია</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
