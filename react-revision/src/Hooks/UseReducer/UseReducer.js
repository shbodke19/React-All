import React, { useReducer, useState } from "react";

const initialVal = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;

  // switch (action.type) {
  //   case "Increment":
  //     return state + 1;
  //   case "Decrement":
  //     return state - 1;
  //   default:
  //     return state;
  // }
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialVal);
  return (
    <>
      <div>
        <p>{state}</p>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "Increment" });
            }}
          >
            Incre
          </button>
          <button
            onClick={() => {
              dispatch({ type: "Decrement" });
            }}
          >
            Decre
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
