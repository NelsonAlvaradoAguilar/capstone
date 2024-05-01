import "./Login.scss";

import { Link } from "react-router-dom";

const Login = ({
  name,
  email,
  password,
  handleOnChangeNamel,
  handleOnChangeEmaill,
  handleOnChangePasswordl,
  handleLogin,
  isLoginError,
  errorMessage,

  home,
}) => {
  return (
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
};
export default Login;
