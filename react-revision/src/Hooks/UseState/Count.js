import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
    alert("Limit is exceed");
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>{" "}
      <button onClick={() => setCount(count - 1)}>Sub</button>
    </>
  );
};

export default Count;
