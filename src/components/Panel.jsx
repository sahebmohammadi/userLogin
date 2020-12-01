import React from "react";
import { useHistory } from "react-router-dom";
import { refreshToken } from "./../services/refreshTokenService";
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
      // Save Token :
      console.log(response);
      // Redirect
      // history.push("/panel");
    } catch (ex) {}
  };
  const style = {
    padding: "100px 70px",
  };
  return (
    <>
      <h1 style={style}>Well come to user Panel</h1>
      <button onClick={handleLogOut}>Logout</button>
      <button onClick={handleRefreshToken}>refresh</button>
    </>
  );
};

export default Panel;
