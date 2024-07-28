import { useEffect, useState } from "react";
import { getEvents, getEventsComments } from "../../Api-tools/Api-tools";
import EventsList from "../../components/EventsList/EventsList";

import "./EventsPage.scss";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [eventsList, setEventsList] = useState([]);

  const getEventsData = async () => {
    try {
      const events = await getEvents();
      setEventsList(events);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <section className="events">
      <div className="events__header">
        <h1 className="events__title">Events</h1>
        <Link className="events__link" to={"/PostAnEvent"}>
          <button className="events__button"></button>
        </Link>
      </div>
      <EventsList List={eventsList} />
    </section>
  );
};

export default EventsPage;
