import "./Profile.scss";

const Profile = (props) => {
  return (
    <section className="profile">
      <img className="profile__image">{props.profile_image}</img> {"image"}
      <div className="profile__data">
        {"name"} <h2 className="profile__subtitle">{props.name}</h2>
        {"lastname"} <p className="profile__subtitle">{props.lastname}</p>
        {"country"} <p className="profile__subtitle">{props.country}</p>
        {"email"} <p className="profile__subtitle">{props.email}</p>
      </div>
    </section>
  );
};

export default Profile;
