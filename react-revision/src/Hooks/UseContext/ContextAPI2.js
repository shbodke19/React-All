import React, { createContext } from "react";
import UseContext from "./UseContext";

const FirstName = createContext();
const LastName = createContext();

const ContextAPI2 = () => {
  return (
    <>
      <FirstName.Provider value={"Shrinivas"}>
        <LastName.Provider value={"Bodke"}>
          <UseContext />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextAPI2;
export { FirstName, LastName };
