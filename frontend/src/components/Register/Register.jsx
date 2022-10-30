import React, { useState } from "react";

import classes from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
    console.log(firstName)
  };

  return (
    <div className={classes.container}>
      <h1>ახალი ანგარიშის რეგისტრაცია</h1>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.info}>
            <h2>პირადი ინფორმაცია</h2>
            <div>
              <label htmlFor="firstName">სახელი</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="სახელი"
              />
            </div>
            <div>
              <label htmlFor="lastName">გვარი</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="გვარი"
              />
            </div>
            <div>
              <label htmlFor="id">პირადი ნომერი</label>
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text"
                placeholder="პირადი ნომერი"
              />
            </div>
            <div>
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
            <div>
              <label htmlFor="firstName">ელ. ფოსტა</label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="mail"
                placeholder="ელ. ფოსტა"
              />
            </div>
            <div>
              <label htmlFor="firstName">პაროლი</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="პაროლი"
              />
            </div>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
