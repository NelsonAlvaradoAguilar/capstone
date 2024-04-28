import { useState } from "react";
import Profile from "../../components/Profile/Profile";

import axios from "axios";
import { apiUrl, loginEndpoint, signup } from "../../Api-tools/Api-tools";
import { Link, useNavigate } from "react-router-dom";

function Login() {
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
  const cancel = () => {
    setIsSignedUp(true);
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

  const renderLogin = () => (
    <section className="login">
      {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
      <Link style={{ textDecoration: "none" }} to={"/signup"}>
        <div className=" login__btc-signup ">Sign Up</div>
      </Link>
      <form className="login__form" onSubmit={handleLogin}>
        <div>
          <label>
            Name:
            <input
              value={name}
              onChange={handleOnChangeNamel}
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
              onChange={handleOnChangeEmaill}
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
              onChange={handleOnChangePasswordl}
              className="login__input-field"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="login__buttons-container">
          {" "}
          <button onClick={home} className="login__btc-signup " type="submit">
            Cancel
          </button>
          <button type="submit" className=" login__btc-signup ">
            Log In
          </button>
        </div>
      </form>
    </section>
  );

  if (!isLoggedIn) {
    return renderLogin();
  }

  return (
    <div>
      <Profile isLogin={isLoggedIn} />
    </div>
  );
}

export default Login;
