import React, { useContext } from "react";
import { FirstName, LastName } from "./ChildA";

const ChildD = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h1>
        My Fast Name is {fname} and last name is {lname}
      </h1>
    </>
  );
};

export default ChildD;
