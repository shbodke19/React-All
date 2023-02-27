import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home page</Link>
      <li>
        <Link to="/user/shree" state={{ name: "Shri Bodke", age: 25 }}>
          Shree
        </Link>
      </li>
      <li>
        <Link to="/user/boss">Boss</Link>
      </li>
    </>
  );
};

export default About;
