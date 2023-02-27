import React, { useState } from "react";

const State = () => {
  const [data, setData] = useState("Shree");
  return (
    <>
      <h1>Hi my name is {data}</h1>
      <button onClick={() => setData("Bodke")}>Click</button>
    </>
  );
};

export default State;
