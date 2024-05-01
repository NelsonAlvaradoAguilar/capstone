import { useState } from "react";

import axios from "axios";
import { loginEndpoint } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";
import ProfilePage from "../ProfilePage/ProfilePage";
import Login from "../../components/Login/Login";

function LoginPage() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginEndpoint, {
        name: name,
        email: email,
        password: password,
      });

      sessionStorage.setItem("JWTtoken", response.data.token);

      setIsLoggedIn(true);
      setIsLoginError(false);
      setErrorMessage("");
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(error.response.data.error);
    }
  };

  const handleOnChangeNamel = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleOnChangePasswordl = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleOnChangeEmaill = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  if (!isLoggedIn) {
    return (
      <Login
        name={name}
        email={email}
        password={password}
        handleLogin={handleLogin}
        handleOnChangeEmaill={handleOnChangeEmaill}
        handleOnChangeNamel={handleOnChangeNamel}
        handleOnChangePasswordl={handleOnChangePasswordl}
        home={home}
        isLoginError={isLoggedIn}
        errorMessage={errorMessage}
      />
    );
  }

  return (
    <div>
      <ProfilePage />
    </div>
  );
}

export default LoginPage;
