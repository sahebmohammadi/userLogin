import React from "react";
import { useHistory } from "react-router-dom";
import { refreshToken } from "./../services/refreshTokenService";
import classes from "./panel.module.scss";
const Panel = () => {
  const history = useHistory();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleRefreshToken = async () => {
    // CALL THE SERVER
    try {
      console.log("call server");
      const token = localStorage.getItem("token");
      const response = await refreshToken(token);

      console.log(response);
    } catch (ex) {}
  };
  return (
    <>
      <h1>Well come to user Panel</h1>
      <button onClick={handleLogOut}>Logout</button>
      <button className={classes.logout} onClick={handleRefreshToken}>
        refresh
      </button>
    </>
  );
};

export default Panel;
