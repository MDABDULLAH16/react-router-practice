import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/user">About us</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
