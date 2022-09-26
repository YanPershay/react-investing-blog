import React, { useContext } from "react";
import CustomButton from "../components/UI/button/CustomButton";
import CustomInput from "../components/UI/input/CustomInput";
import { AuthContext } from "../context/appContext.js";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = () => {
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <CustomInput type="text" placeholder="Login" />
        <CustomInput type="text" placeholder="Password" />
        <CustomButton>Login</CustomButton>
      </form>
    </div>
  );
};

export default Login;
