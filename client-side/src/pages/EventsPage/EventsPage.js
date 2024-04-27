import { useEffect, useState } from "react";
import { getEvents, getEventsComments } from "../../Api-tools/Api-tools";
import EventsList from "../../components/EventsList/EventsList";

import "./EventsPage.scss";

const EventsPage = () => {
  const [eventsList, setEventsList] = useState([]);

  const getEventsData = async () => {
    try {
      const events = await getEvents();

      setEventsList(events);
      console.log(events);
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <section className="events">
      <h1 className="events__title">Events</h1>
      <EventsList List={eventsList} />
    </section>
  );
};

export default EventsPage;
