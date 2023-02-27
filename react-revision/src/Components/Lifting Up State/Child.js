import React from "react";

const Child = (props) => {
  const data = "Boss is Here";
  return (
    <>
      <h3>Child Component</h3>
      <p>My Name is {props.name}</p>
      <button onClick={() => props.alert(data)}>Click</button>
    </>
  );
};

export default Child;
