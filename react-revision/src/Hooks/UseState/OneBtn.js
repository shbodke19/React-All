import React, { useState } from "react";

const OneBtn = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const ClickEvent = () => {
    if (toggle) {
      setCount(count - 1);
      setToggle(false);
    } else {
      setCount(count + 2);
      setToggle(true);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={ClickEvent}>Toggle</button>
    </>
  );
};

export default OneBtn;
