import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        necessitatibus omnis maxime aut corporis sint ducimus ipsam numquam
        ratione mollitia.
      </p>
      <button onClick={() => navigate("/about")}>Go to about page</button>
      <button onClick={() => navigate(-1)}>Go to back page</button>
      <button onClick={() => navigate("/filter")}>Go to Filter page</button>
    </>
  );
};

export default Home;
