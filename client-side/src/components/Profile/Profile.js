import { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import { profileEndpoint } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";

const Profile = ({ isLogin }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const logingOut = () => {
    navigate("/home");
  };
  const token = sessionStorage.getItem("JWTtoken");
  const logout = async () => {
    const response = await axios.post(`${profileEndpoint}/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    sessionStorage.removeItem("JWTtoken");
    logingOut();
  };
  useEffect(() => {
    if (!token) {
      return;
    }

    const getProfile = async () => {
      try {
        const response = await axios.get(profileEndpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setUserInfo(response.data);
        console.log(userInfo);
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, [token]);
  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <section className="profile">
      <img
        src={userInfo.profile_image}
        alt="/"
        className="profile__image"
      ></img>{" "}
      {"image"}
      <div className="profile__data">
        {"name"} <h2 className="profile__subtitle">{userInfo.name}</h2>
        {"lastname"} <p className="profile__subtitle">{userInfo.lastname}</p>
        {"country"} <p className="profile__subtitle">{userInfo.country}</p>
        {"email"} <p className="profile__subtitle">{userInfo.email}</p>
      </div>
      <button
        onClick={logout}
        className="signup__btc-signup  signup__btc-signup--out"
        type="submit"
      >
        Log out
      </button>
    </section>
  );
};

export default Profile;
