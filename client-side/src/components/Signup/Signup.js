import "./Signup.scss";
import { apiUrl, signup } from "../../Api-tools/Api-tools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [profile_image, setProfile_image] = useState("");
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/");
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const resp = await signup(
        name,
        password,
        country,
        email,
        lastname,
        profile_image
      );
      setIsSignedUp(true);
      navigate("/home");
      console.log(resp);
    } catch (error) {
      console.log(`error signingup${error}`);
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
  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };
  const handleOnChangeLastname = (e) => {
    setLastname(e.target.value);
    console.log(lastname);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleOnChangeProfile_image = (e) => {
    const file = e.target.files[0];
    const imagePath = `${apiUrl}/images/${file.name}`;
    setProfile_image(imagePath);
    console.log(imagePath);
  };

  return (
    <section className="signup">
      {" "}
      <h2 className="signup__title">Sign Up</h2>
      <form className="signup__form" onSubmit={handleSignup}>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="name">
            Name:
            <br></br>
            <input
              className="signup__input"
              type="text"
              name="name"
              placeholder=" Name"
              value={name}
              onChange={handleOnChangeName}
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="lastname">
            lastname:
            <br></br>
            <input
              onChange={handleOnChangeLastname}
              className="signup__input"
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={lastname}
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="country">
            country:
            <br></br>
            <input
              onChange={handleOnChangeCountry}
              className="signup__input"
              type="text"
              name="country"
              placeholder="Country"
              value={country}
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="email">
            Email:
            <br></br>
            <input
              onChange={handleOnChangeEmail}
              value={email}
              className="signup__input"
              type="text"
              name="email"
              placeholder=" Email"
            />
          </label>
        </div>
        <div className="signup__input-container">
          {" "}
          <label className="signup__labels" htmlFor="email">
            Profile image:
            <br></br>
            <input
              onChange={handleOnChangeProfile_image}
              title="file"
              className="signup__input"
              type="file"
              name="profile_image"
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
              value={password}
              onChange={handleOnChangePassword}
            />
          </label>
        </div>

        <div className="signup__buttons-container">
          {" "}
          <button
            onClick={cancel}
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
