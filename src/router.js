import React, { Component } from "react";
import Home from "./views/Home/Home";
import Banner from "./views/Banner/Banner";
import Login from "./views/Login/Login";
import { Route, Routes } from "react-router-dom";

export default class IRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }
}
