import React, { useState } from "react";
import Child2 from "./Child2";

const Parent2 = () => {
  const [color, setColor] = useState(null);

  const getColor = (colo) => {
    setColor(colo);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: `${color}`,
          width: "300px",
          height: "300px",
          border: "2px solid red",
        }}
      ></div>
      <br />
      <Child2 getColor={getColor} />
    </>
  );
};

export default Parent2;
