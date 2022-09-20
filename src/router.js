import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Banner from "./views/Banner/Banner";
import CreateUser from "./views/CreateUser/CreateUser";
import UserList from "./views/UserList/UserList";


export default class IRouter extends Component {
  render() {
    return (
      <Routes basename="/React_AntDesign">
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/banner" element={<Banner />} />   
        <Route path="/user/create" element={<CreateUser />} />  
        <Route path="/user/list" element={<UserList />} />   
      </Routes>
    );
  }
}
