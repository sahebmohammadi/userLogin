import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
};

export default NavBar;
