import React from "react";
import { Provider } from "react-redux";
import Main from "./Main";
import store from "./store";

const HomePage = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default HomePage;
