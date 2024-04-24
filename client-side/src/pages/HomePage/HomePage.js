import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import {
  getEvents,
  getClasses,
  getArticles_news,
} from "../../Api-tools/Api-tools";
import HomeCards from "../../components/HomeCards/HomeCards";
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
      <button className="home__loginBtn">log in</button>
      <HomeCards title={eventHome.title} image={eventHome.images} />
      <Link className="home__link" to={"/classes"}>
        {" "}
        <HomeCards title={classesHome.title} image={classesHome.images} />
      </Link>
      <Link to={"/news"}>
        <HomeCards
          title={getArticles_newsHome.title}
          image={getArticles_newsHome.images}
        />
      </Link>
    </section>
  );
};

export default HomePage;
