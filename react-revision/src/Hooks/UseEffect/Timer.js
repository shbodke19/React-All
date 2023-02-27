import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  if (count1 < 0) {
    setCount1(0);
    alert("Limit is exceed");
  }

  useEffect(() => {
    console.log("Component");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count1]);
  return (
    <>
      <h1>I have rendered {count} times!</h1>
      <h1>{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Add</button>{" "}
      <button onClick={() => setCount1(count1 - 1)}>Sub</button>
    </>
  );
};

export default Timer;
