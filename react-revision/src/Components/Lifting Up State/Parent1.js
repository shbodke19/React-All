import React from "react";
import Child1 from "./Child1";

const Parent1 = () => {
  const getData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Child1 getData={getData} />
    </>
  );
};

export default Parent1;
