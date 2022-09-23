import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLinks}>
        <Link to="/posts">Posts </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
