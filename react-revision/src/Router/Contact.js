import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <li>
        <Link to="company">Comapany</Link>
      </li>
      <li>
        <Link to="channel">Channel</Link>
      </li>

      <Outlet />
    </>
  );
};

export default Contact;
