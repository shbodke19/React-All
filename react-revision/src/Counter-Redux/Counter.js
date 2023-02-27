import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, zero } from "./action";

export const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const handleZero = () => {
    dispatch(zero(0));
  };

  return (
    <div>
      <h1>Counter -: {counter} </h1>
      <button onClick={() => handleIncrement()}>+(Inc)</button>
      <button onClick={() => handleDecrement()}>-(Dec)</button>
      <button onClick={() => handleZero()}>0(Reset)</button>
    </div>
  );
};
