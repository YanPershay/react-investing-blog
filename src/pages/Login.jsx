import React from "react";
import CustomButton from "../components/UI/button/CustomButton";
import CustomInput from "../components/UI/input/CustomInput";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <CustomInput type="text" placeholfer="Login"/>
        <CustomInput type="text" placeholfer="Password"/>
        <CustomButton>Enter</CustomButton>
      </form>
    </div>
  );
};

export default Login;
