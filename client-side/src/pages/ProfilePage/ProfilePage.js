import { useEffect, useState } from "react";
import axios from "axios";
import { fetchEventsByUserId, logOut, token } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import HomePage from "../HomePage/HomePage";
import { getAthorized } from "../../Api-tools/Api-tools";

const ProfilePage = ({ login }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [userEvents, setUserEvents] = useState();
  const [user_id, setUser_id] = useState(null);
  const [signUpStatus, setSignUpStatus] = useState(null);
  const navigate = useNavigate();
  const returHome = () => {
    navigate("/home");
  };

  const logout = async () => {
    const response = await logOut(token);

    returHome();
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
  const getUserEvents = async (user_id) => {
    try {
      const eventUser = await fetchEventsByUserId(user_id);
      console.log(eventUser);
      setUserEvents(eventUser);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserEvents(user_id);
  }, [user_id]);
  return isLoading ? (
    <HomePage logOut={logout} />
  ) : (
    <>
      {" "}
      {signUpStatus === "success" && <div>You have created an account</div>}
      <Profile userInfo={userInfo} logout={logout} userEvents={userEvents} />
    </>
  );
};

export default ProfilePage; //
