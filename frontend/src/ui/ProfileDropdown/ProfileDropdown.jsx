import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/ConfigureStore.User";

import classes from "./ProfileDropdown.module.css";

const ProfileDropdown = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.presistedUser.userReducer.user);

  const signoutClickHandler = () => {
    dispatch(userActions.setState());
    props.changeState();
  };

  return (
    <div className={classes.container}>
      <ul className={classes.options}>
        {user.isAdmin && (
          <li>
            <Link to="/product/upload">პროდუქტის ატვირთვა</Link>
          </li>
        )}
        {!user.isAdmin && <li>პროფილი</li>}
        <li>შეკვეთების ისტორია</li>
        <li onClick={signoutClickHandler}>გასვლა</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
