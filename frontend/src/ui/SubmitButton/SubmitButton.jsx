import React from "react";

import classes from "./SubmitButton.module.css";

const SubmitButton = ({ children }) => {
  return (
    <div className={classes.container}>
      <button>{children}</button>
    </div>
  );
};

export default SubmitButton;
