import React, { useState } from "react";
import useCustom from "./Custom";

const Test = () => {
  const [count, setCount] = useState(0);

  //Custom Hooks
  useCustom(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Test</button>
    </>
  );
};

export default Test;
