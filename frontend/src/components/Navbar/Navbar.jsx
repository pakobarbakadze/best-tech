import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

import Logo from "../../icons/logo.png";
import Cart from "../../icons/cart.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/">Best Tech</Link>
      </div>
      <div className={classes.search}>
        <input placeholder="რას ეძებთ ?"></input>
        <button>ძებნა</button>
      </div>
      <div className={classes.menu}>
        <Link to="/cart">
          <img src={Cart} alt="cart" />
        </Link>
        <Link to="/login">ავტორიზაცია</Link>
      </div>
    </div>
  );
};

export default Navbar;
