import "./Login.scss";

const LogIn = (props) => {
  return (
    <section className="login">
      <form className="login__form">
        <div>
          <label>
            Name:
            <input className="login__input-field" placeholder="name" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input className="login__input-field" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            password:
            <input className="login__input-field" placeholder="Password" />
          </label>
        </div>
      </form>
      <div className="login__buttons-container">
        {" "}
        <button className="login__btc-signup " type="submit">
          Sign Up
        </button>
        <button
          className=" login__btc-signup login__btc-signup--login"
          type="submit"
        >
          Log In
        </button>
      </div>
    </section>
  );
};

export default LogIn;
