import React from "react";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router";
import Dashboard from "../Dashboard/Dashboard";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
