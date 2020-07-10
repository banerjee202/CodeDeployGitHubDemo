import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
         Dashboard
      </a>

      <a className="menu-item" href="/burgers">
        Login
      </a>

      
    </Menu>
  );
};