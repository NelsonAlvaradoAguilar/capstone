import "./EventsList.scss";

import { Link } from "react-router-dom";

const EventsList = ({ List }) => {
  return (
    <section className="eventsList-container">
      {
        <ul className="eventsList-container__ul">
          {List?.map((events) => (
            <li className="eventsList-container__list" key={events.id}>
              {" "}
              <Link
                className="eventsList-container__link"
                to={`/events/${events.id}`}
              >
                <img
                  className="eventsList-container__img "
                  src={events.images}
                ></img>
                <h3 className="eventsList-container__subtitle">
                  {events.title}
                </h3>
                <p className="eventsList-container__subtitle eventsList-container__subtitle--location">
                  {events.location}
                </p>
              </Link>{" "}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default EventsList;
