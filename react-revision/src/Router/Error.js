import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>404 Error </h1>
      <h3>No result found</h3>
      <Link to="/">Home page</Link>
    </>
  );
};

export default Error;
