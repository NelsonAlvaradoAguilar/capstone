import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import {
  getEvents,
  getClasses,
  getArticles_news,
  getAthorized,
} from "../../Api-tools/Api-tools";

import { Link, useNavigate } from "react-router-dom";
const HomePage = ({ logOut }) => {
  const [eventHome, setEventHome] = useState([]);
  const [classesHome, setClassesHome] = useState([]);
  const [articles_newsHome, setDonationsAndNewsHome] = useState([]);
  const [userImg, setUserImg] = useState();
  const [userName, setUserName] = useState();

  const getContentList = async () => {
    const events = await getEvents();
    setEventHome(events[0]);
    const classes = await getClasses();
    setClassesHome(classes[0]);
    const donationsNews = await getArticles_news();
    setDonationsAndNewsHome(donationsNews[0]);
    const user = await getAthorized();
    setUserImg(user.images);
    setUserName(user.name);
  };

  useEffect(() => {
    getContentList();
  }, []);

  return (
    <section className="home">
      <div className="home__content">
        <div className="home__login-profile">
          <h1 className="home__userName">{userName}</h1>
          {userImg ? (
            <Link to={"/profile"}>
              <img className="home__userInfo" src={userImg}></img>
            </Link>
          ) : (
            <Link className="home__link" to={"/login"}>
              <button className="home__loginBtn">log in</button>
            </Link>
          )}
          {userImg && (
            <button onClick={logOut} className="home__loginBtn">
              logOut
            </button>
          )}
        </div>
        <h1 className="home__title">Northumberland Hispanic Cultural Club</h1>
        <p className="home__bio">
          The Northumberland Hispanic Cultural Club, is a registered
          not-for-profit organization that promotes and celebrates the arts,
          cuisine, culture, Heritage and music of Latin Hispanic countries.
        </p>
        <Link className="home__link home__link" to={"/login"}>
          <button className="home__loginBtn home__loginBtn--visible">
            log in
          </button>
        </Link>
      </div>

      <div className="home__container">
        <Link className="home__link" to={"/events"}>
          {""}
          <h1 className="home__subtitle">Events</h1>
          <img className="home__image" src={eventHome.images} />
        </Link>
        <Link className="home__link" to={"/classes"}>
          {" "}
          <h1 className="home__subtitle">Classes</h1>
          <img className="home__image" src={classesHome.images} />
        </Link>
        <Link className="home__link" to={"/news"}>
          <h1 className="home__subtitle"> Donations/News</h1>
          <img className="home__image" src={articles_newsHome.images} />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
