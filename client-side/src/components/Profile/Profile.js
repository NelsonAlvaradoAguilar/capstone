import "./Profile.scss";

const Profile = ({ userInfo, logout }) => {
  console.log(userInfo.profile_image);
  return (
    <section className="profile">
      <img
        src={userInfo?.profile_image}
        alt="/"
        className="profile__image"
      ></img>{" "}
      {"image"}
      <div className="profile__data">
        <h2 className="profile__subtitle">
          {" "}
          {"name:"} {userInfo?.name}
        </h2>
        <p className="profile__subtitle">
          {" "}
          {"Lastname:"} {userInfo?.lastname}
        </p>
      </div>
      <p className="profile__subtitle">
        {"Country: "}
        {userInfo?.country}
      </p>
      <p className="profile__subtitle">
        {"Email: "}
        {userInfo?.email}
      </p>
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
