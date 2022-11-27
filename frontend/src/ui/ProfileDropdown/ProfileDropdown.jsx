import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/ConfigureStore.User.js";
import { cartActions } from "../../redux/ConfigureStore.Cart.js";

import classes from "./ProfileDropdown.module.css";

const ProfileDropdown = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.persistedStore.userReducer.user);

  const signoutClickHandler = () => {
    const config = { Authorization: `Bearer ${user.token}` };

    axios
      .post("/api/users/signOut", { token: user.token }, { headers: config })
      .then((res) => {
        dispatch(userActions.setState());
        dispatch(cartActions.emptyCart());
        props.changeState();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <ul className={classes.options}>
        {user?.userData.isAdmin && (
          <li>
            <Link to="/product/upload">Upload product</Link>
          </li>
        )}
        {!user?.userData.isAdmin && <li>Profile</li>}
        <li>Order history</li>
        <li onClick={signoutClickHandler}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
