import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import {
  getEvents,
  getClasses,
  getArticles_news,
} from "../../Api-tools/Api-tools";

import { Link } from "react-router-dom";
const HomePage = () => {
  const [eventHome, setEventHome] = useState([]);
  const [classesHome, setClassesHome] = useState([]);
  const [getArticles_newsHome, setDonationsAndNewsHome] = useState([]);
  const getContentList = async () => {
    const events = await getEvents();
    setEventHome(events[0]);
    const classes = await getClasses();
    setClassesHome(classes[0]);
    const donationsNews = await getArticles_news();
    setDonationsAndNewsHome(donationsNews[0]);
  };
  useEffect(() => {
    getContentList();
  }, []);
  return (
    <section className="home">
      <Link className="home__link" to={"/login"}>
        <button className="home__loginBtn">log in</button>
      </Link>
      <h1 className="home__title">Northumberland Hispanic Cultural Club</h1>
      <p className="home__bio">
        The Northumberland Hispanic Cultural Club, is a registered
        not-for-profit organization that promotes and celebrates the arts,
        cuisine, culture, Heritage and music of Latin Hispanic countries.
      </p>
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
          <h1 className="home__subtitle"> Donations and News</h1>
          <img className="home__image" src={getArticles_newsHome.images} />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
