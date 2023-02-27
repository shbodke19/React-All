import React, { createContext } from "react";
import ChildB from "./ChildB";

const FirstName = createContext();
const LastName = createContext();

const ChildA = () => {
  return (
    <>
      <FirstName.Provider value="Shree">
        <LastName.Provider value="Bodke">
          <ChildB />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ChildA;
export { FirstName, LastName };
