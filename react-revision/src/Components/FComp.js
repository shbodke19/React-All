import React from "react";

function Car() {
  return <h2>I am a Car!</h2>;
}

const FComp = (props) => {
  return (
    <>
      <Car />
      <h1>Hii Hello From {props.name}al Component</h1>
    </>
  );
};

export default FComp;
