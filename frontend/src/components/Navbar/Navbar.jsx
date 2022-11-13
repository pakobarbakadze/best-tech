import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import classes from "./Navbar.module.css";

import Logo from "../../icons/logo.png";
import Cart from "../../icons/cart.png";
import ProfileDropdown from "../../ui/ProfileDropdown/ProfileDropdown";

const Navbar = () => {
  const user = useSelector((state) => state.presistedUser.userReducer.user);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const profileStateHandler = () =>{
    setProfileDropDown(!profileDropDown)
  }

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
        {!user.userData && (
          <Link to="/login" className={classes.profile}>
            ავტორიზაცია
          </Link>
        )}
        {user.userData && (
          <div
            className={classes.profile}
            onClick={profileStateHandler}
          >
            ჩემი ანგარიში
          </div>
        )}
        {profileDropDown && <ProfileDropdown changeState={profileStateHandler}/>}
      </div>
    </div>
  );
};

export default Navbar;
