import React from "react";
import { useHistory } from "react-router-dom";

const Panel = () => {
  const history = useHistory();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };
  const style = {
    padding: "100px 70px",
  };
  return (
    <>
      <h1 style={style}>Well come to user Panel</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Panel;
