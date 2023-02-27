import React, { useCallback, useState } from "react";
import Child from "./Child";

const Couunt = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {
    //some operation
  }, [count]);
  return (
    <>
      <h1>Use CallBack</h1>
      <Child Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button> <br /> <br />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 3)}>Count</button> <br /> <br />
    </>
  );
};

export default Couunt;
