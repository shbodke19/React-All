import React from "react";
import CompB from "./CompB";

const CompA = ({ name }) => {
  return (
    <>
      {/* <h1>Component A</h1> */}
      <CompB name={name} />
    </>
  );
};

export default CompA;
