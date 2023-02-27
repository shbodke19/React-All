import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

const ContextAPI = () => {
  return (
    <>
      <FirstName.Provider value={"Shrinivas"}>
        <LastName.Provider value={"Bodke"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default ContextAPI;
export { FirstName, LastName };
