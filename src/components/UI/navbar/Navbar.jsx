import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/appContext";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };

  return (
    isAuth && (
      <div className={classes.navbar}>
        <div className={classes.navbarLinks}>
          <Link to="/posts">Posts </Link>
          <Link to="/about">About </Link>

          <Link to="/login" onClick={logout}>
            Log out
          </Link>
        </div>
      </div>
    )
  );
};

export default Navbar;
