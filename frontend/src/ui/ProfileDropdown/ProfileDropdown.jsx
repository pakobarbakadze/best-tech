import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/ConfigureStore.User";

import classes from "./ProfileDropdown.module.css";

const ProfileDropdown = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.presistedUser.userReducer.user);

  const signoutClickHandler = () => {
    const config = { Authorization: `Bearer ${user.token}` };
    const bodyParameters = { token: user?.token };

    axios
      .post("/api/users/signOut", bodyParameters, { headers: config })
      .then((res) => {
        dispatch(userActions.setState());
        props.changeState();
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
            <Link to="/product/upload">პროდუქტის ატვირთვა</Link>
          </li>
        )}
        {!user?.userData.isAdmin && <li>პროფილი</li>}
        <li>შეკვეთების ისტორია</li>
        <li onClick={signoutClickHandler}>გასვლა</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
