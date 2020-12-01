// imports
import React from "react";
import classes from "./loginLayout.module.scss";
const loginLayout = ({ children }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.formBg}>{children}</div>
      </div>
    </>
  );
};

export default loginLayout;
