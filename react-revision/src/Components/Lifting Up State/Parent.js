import React from "react";
import Child from "./Child";

const Parent = () => {
  const parentFun = (data) => {
    // alert("Hello Guys");
    alert(data);
  };
  return (
    <>
      <h1>Parent Component</h1>
      <Child name="Shree" alert={parentFun} />
    </>
  );
};

export default Parent;

/// child to parent send a data as a props called (Lifting State Up).
