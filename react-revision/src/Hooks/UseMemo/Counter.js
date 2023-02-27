import React, { useMemo, useState } from "react";

const Counter = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(10);

  //   const multiply = () => {
  //     console.log("Counter is working");
  //     return add * 10;
  //   };

  const MultiPli = useMemo(() => {
    console.log("Counter is working");
    return add * 10;
  }, [add]);

  return (
    <>
      <h3>{MultiPli}</h3>
      <span>{add} </span>{" "}
      <button onClick={() => setAdd(add + 1)}>Addition</button> <br /> <br />
      <span>{minus}</span>{" "}
      <button onClick={() => setMinus(minus - 1)}>SubStraction</button>
    </>
  );
};

export default Counter;
