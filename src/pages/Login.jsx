import React, { useContext, useState } from "react";
import CustomButton from "../components/UI/button/CustomButton";
import CustomInput from "../components/UI/input/CustomInput";
import ModalWindow from "../components/UI/modal/ModalWindow";
import { AuthContext } from "../context/appContext.js";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [loginValue, setLogin] = useState("");
  const [passwordValue, setPassword] = useState("");

  const logAndPassPlug = "trex1712";

  const login = (e) => {
    e.preventDefault();

    if (loginValue === logAndPassPlug && passwordValue === logAndPassPlug) {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    } else {
      setModal(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <ModalWindow visibility={modal} setVisibility={setModal}>
          <span>Incorrect login or password. Please, try again</span>
        </ModalWindow>
        <CustomInput
          type="text"
          placeholder="Login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <CustomInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton>Login</CustomButton>
      </form>
    </div>
  );
};

export default Login;
