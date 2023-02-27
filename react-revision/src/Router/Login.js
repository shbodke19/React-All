import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const Login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login Page</h1>
      <input type="text" /> <br />
      <input type="text" /> <br />
      <button onClick={Login}>Login</button>
    </>
  );
};

export default Login;
