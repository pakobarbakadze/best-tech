import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import classes from "./Navbar.module.css";

import Logo from "../../icons/logo.png";
import Cart from "../../icons/cart.png";

import ProfileDropdown from "../../ui/ProfileDropdown/ProfileDropdown";
import CartDropdown from "../../ui/CartDropdown/CartDropdown";

const Navbar = () => {
  const user = useSelector((state) => state.persistedStore.userReducer.user);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);

  const profileStateHandler = () => {
    setProfileDropDown(!profileDropDown);
    if(cartDropdown) setCartDropdown(false)
  };

  const cartDropdownStateHandler = () => {
    setCartDropdown(!cartDropdown);
    if(profileDropDown) setProfileDropDown(false)
  };

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
        <img src={Cart} alt="cart" onClick={cartDropdownStateHandler} className={classes['cart_img']}/>
        {!user?.userData ? (
          <Link to="/login" className={classes.profile}>
            ავტორიზაცია
          </Link>
        ) : (
          <div className={classes.profile} onClick={profileStateHandler}>
            ჩემი ანგარიში
          </div>
        )}

        {profileDropDown && (
          <ProfileDropdown changeState={profileStateHandler} />
        )}
        {cartDropdown && <CartDropdown></CartDropdown>}
      </div>
    </div>
  );
};

export default Navbar;
