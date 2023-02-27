import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Conatact</NavLink>
        </li>
        <li>
          <NavLink to="/filter">Filter</NavLink>
        </li>
      </ul>
      <br />
    </>
  );
};

export default NavBar;
