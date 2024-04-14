import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import {
  getEvents,
  getClasses,
  getDonationsAndNews,
} from "../../Api-tools/Api-tools";
import HomeCards from "../../components/HomeCards/HomeCards";
const HomePage = () => {
  const [eventHome, setEventHome] = useState([]);
  const [classesHome, setClassesHome] = useState([]);
  const [donationsAndNewsHome, setDonationsAndNewsHome] = useState([]);
  const getEventsList = async () => {
    const events = await getEvents();
    console.log(events[0]);
    setEventHome(events[0]);
  };
  const getClassesList = async () => {
    const classes = await getClasses();
    console.log(classes[0]);
    setClassesHome(classes[0]);
  };

  const getDonationsAndNewsList = async () => {
    const donationsNews = await getDonationsAndNews();
    console.log(donationsNews[0]);
    setDonationsAndNewsHome(donationsNews[0]);
  };
  useEffect(() => {
    getEventsList();
    getClassesList();
    getDonationsAndNewsList();
  }, []);
  return (
    <section className="home">
      <button className="home__loginBtn">log in</button>
      <HomeCards title={eventHome.title} image={eventHome.images} />
      <HomeCards title={classesHome.title} image={classesHome.images} />
      <HomeCards
        title={donationsAndNewsHome.title}
        image={donationsAndNewsHome.images}
      />
    </section>
  );
};

export default HomePage;
