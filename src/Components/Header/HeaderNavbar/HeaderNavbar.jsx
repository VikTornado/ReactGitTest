import React from "react";
import nav from "./HeaderNavbar.module.css";
import { NavLink } from "react-router-dom";

const HeaderNavbar = (props) => {
  return (
    <ul className={nav.list}>
      <NavLink to={"/main"} className={nav.item}>
        Main
      </NavLink>
      <NavLink to={"/home"} className={nav.item}>
        Home
      </NavLink>
      <NavLink to={"/products"} className={nav.item}>
        Products
      </NavLink>
      <NavLink to={"/profile"} className={nav.item}>
        Profile
      </NavLink>
      <NavLink to={"/chats"} className={nav.item}>
        Chats
      </NavLink>
      <NavLink to={"/about"} className={nav.item}>
        About
      </NavLink>
        <NavLink to={"/test"} className={nav.item}>
        Test
      </NavLink>
    </ul>
  );
};

export default HeaderNavbar;
