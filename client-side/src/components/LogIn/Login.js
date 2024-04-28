import { useState } from "react";
import "./Login.scss";
import { login, loginEndpoint } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LogIn = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/home");
  };
  const Logout = () => {
    sessionStorage.removeItem("JWTtoken");
    setIsLoggedIn(false);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(loginEndpoint, {
        name,
        email,
        password,
      });
      console.log(response);
      sessionStorage.setItem("jwt", response.data.token);
      setIsLoggedIn(true);
      setIsLoginError(false);
      // setSuccessMessage(navigate("/profile"));
      setErrorMessage("");
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(error.response.data.error);
    }
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <section className="login">
      {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
      <form className="login__form" onSubmit={handleLogin}>
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={handleOnChangeName}
              className="login__input-field"
              placeholder="name"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              value={email}
              onChange={handleOnChangeEmail}
              className="login__input-field"
              placeholder="Email"
            />
          </label>
        </div>
        <div>
          <label>
            password:
            <input
              value={password}
              onChange={handleOnChangePassword}
              className="login__input-field"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="login__buttons-container">
          {" "}
          <button onClick={cancel} className="login__btc-signup " type="submit">
            Sign Up
          </button>
          <button type="submit" className=" login__btc-signup ">
            Log In
          </button>
        </div>
      </form>
    </section>
  );
};
