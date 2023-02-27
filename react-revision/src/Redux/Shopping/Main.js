import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import Home from "./Component/Home";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
