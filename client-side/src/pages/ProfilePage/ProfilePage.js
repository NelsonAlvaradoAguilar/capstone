import { useEffect, useState } from "react";
import axios from "axios";
import { profileEndpoint } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import HomePage from "../HomePage/HomePage";
import { getAthorized } from "../../Api-tools/Api-tools";
const ProfilePage = ({ login }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [user_id, setUser_id] = useState(null);
  const [signUpStatus, setSignUpStatus] = useState(null);
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
        const resp = await getAthorized();
        setIsLoading(false);
        setUserInfo(resp);
        setUser_id(resp.id);
        setSignUpStatus("success");
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, [token]);

  return isLoading ? (
    <HomePage />
  ) : (
    <>
      {" "}
      {signUpStatus === "success" && <div>You have created an account</div>}
      <Profile userInfo={userInfo} logout={logout} />
    </>
  );
};

export default ProfilePage;
