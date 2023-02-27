import React, { useRef } from "react";
import User from "./User";

const Parent = () => {
  let inputRef = useRef(null);

  const ClickFun = () => {
    // inputRef.current.value = 1000;
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Forward Ref Example</h1>
      <User ref={inputRef} />
      <button onClick={ClickFun}>Update </button>
    </>
  );
};

export default Parent;
