import React, { useState } from "react";

const Toggle = () => {
  const [count, setCount] = useState(0);

  const Counter = () => {
    if (count == 0) {
      setCount(count + 1);
    } else if (count == 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => Counter()}>Click</button>
    </>
  );
};

export default Toggle;
