import "./Signup.scss";

const Signup = () => {
  return (
    <section className="signup">
      {" "}
      <h2 className="signup__title">Sign Up</h2>
      <form className="signup__form">
        <div className="signup__input-container">
          {" "}
          <label lassName="signup__labels" htmlFor="name">
            Name:
            <br></br>
            <input
              className="signup__input"
              type="text"
              name="name"
              placeholder=" Name"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label lassName="signup__labels" htmlFor="name">
            lastname:
            <br></br>
            <input
              className="signup__input"
              type="text"
              name="name"
              placeholder=" Lastame"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label lassName="signup__labels" htmlFor="name">
            country:
            <br></br>
            <input
              className="signup__input"
              type="text"
              name="name"
              placeholder="Country"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label lassName="signup__labels" htmlFor="email">
            Email:
            <br></br>
            <input
              className="signup__input"
              type="text"
              name="email"
              placeholder=" Email"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label lassName="signup__labels" htmlFor="email">
            Profile image:
            <br></br>
            <input
              className="signup__input"
              type="file"
              name="email"
              placeholder=" Profile image"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="password">
            Password:
            <br></br>{" "}
            <input
              className="signup__input"
              type="password"
              name="password"
              placeholder=" Password"
            />
          </label>
        </div>

        <div className="signup__buttons-container">
          {" "}
          <button
            className="signup__btc-signup  signup__btc-signup--cancel"
            type="submit"
          >
            Cancel
          </button>
          <button className="signup__btc-signup" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
