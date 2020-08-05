import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

export default (props) => {
  return (
    <Menu width={"150px"}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Login
      </a>
    </Menu>
  );
};