import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Channel from "./Channel";
import Company from "./Company";
import Contact from "./Contact";
import Error from "./Error";
import Filter from "./Filter";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Protcted from "./Protcted";
import User from "./User";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Protcted Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protcted Component={About} />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Protcted Component={Filter} />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
