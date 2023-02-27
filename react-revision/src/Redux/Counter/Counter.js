import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Count from "./Reducer";

const Counter = () => {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
};

export default Counter;
