import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import CountMain from "./Counter-Redux/CountMain";
import store from "./Counter-Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // <Provider store={store}>
  //   <CountMain />
  // </Provider>
);
