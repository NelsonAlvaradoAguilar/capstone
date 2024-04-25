import { useEffect, useState } from "react";
import { getEvents } from "../../Api-tools/Api-tools";
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
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    getEventsData();
  }, []);

  return (
    <section className="events">
      <EventsList List={eventsList} />
    </section>
  );
};

export default EventsPage;
