import React from "react";

import classes from "./Navbar.module.css";

import Logo from "../../icons/logo.png";
import Cart from '../../icons/cart.png';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="logo" />
        <h1>Best Tech</h1>
      </div>
      <div className={classes.search}>
        <input placeholder="რას ეძებთ ?"></input>
        <button>ძებნა</button>
      </div>
      <div className={classes.menu}>
        <img src={Cart} alt="cart" />
        <h1>ჩემი ანგარიში</h1>
      </div>
    </div>
  );
};

export default Navbar;
