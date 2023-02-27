import React from "react";
import { Provider } from "react-redux";
import Main from "./Main";
import store from "./store/Store";

const Shop = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default Shop;
