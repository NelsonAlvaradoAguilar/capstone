import "./Profile.scss";
import CardsList from "../CardsList/CardsList";
const Profile = ({ userInfo, logout, userEvents }) => {
  console.log(userInfo.images, userEvents);
  return (
    <section data-testid="Profile-1" className="profile">
      <img
        src={userInfo?.images}
        alt="Profile Image"
        className="profile__image"
      ></img>{" "}
      {"image"}
      <ul className="profile__cards-container">
        {userEvents?.map((event) => {
          console.log(event);
          return (
            <li key={event.id}>
              <CardsList cards={event} />
            </li>
          );
        })}
      </ul>
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
