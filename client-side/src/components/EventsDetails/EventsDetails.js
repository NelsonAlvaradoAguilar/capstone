import React, { useEffect, useState } from "react";
import "./EventsDetails.scss";
import { getSigleEvent, getEventsComments } from "../../Api-tools/Api-tools";
import Comments from "../Comments/Comments";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrowback from "../../assets/icons/icons8-back-arrow-64.png";
import AddCommentIcon from "../../assets/icons/icons8-add-48.png";
const EventsDetails = () => {
  const { id } = useParams();
  const [singleEvent, setSingleEvent] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  const [commnetsNumber, setCommnetsNumber] = useState();
  const navigate = useNavigate();
  const clickBack = (e) => {
    navigate(-1);
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const getSingleEventData = async () => {
    try {
      const resp = await getSigleEvent(id);
      const comments = await getEventsComments(id);
      setCommentsList(comments);
      setSingleEvent(resp);
      setCommnetsNumber(comments.length);
    } catch (error) {
      console.error(`Error fetching single class ${id}:`, error);
    }
  };

  useEffect(() => {
    getSingleEventData();
  }, [id]);

  return (
    <section className="events-details">
      <h1 className="events-details__title">{singleEvent?.title}</h1>
      <img className="events-details__img" src={singleEvent?.images}></img>
      <div className="events-details__content">
        <div className="events-details__content events-details__content--date-location">
          <h3>Date:</h3>
          <p>{singleEvent?.date}</p>
        </div>
        <div className="events-details__content events-details__content--date-location">
          <h3>Location:</h3>
          <p>{singleEvent?.location}</p>
        </div>
      </div>

      <p className="events-details__description">{singleEvent?.description}</p>
      <div className="events-details__entrance-container">
        <h3>Entrance:</h3>

        <p>${singleEvent?.price}</p>
      </div>
      <div
        onClick={handleOpenModal}
        className="events-details__subtitle events-details__subtitle--arrow-back"
      >
        <h4> Comments</h4> {commnetsNumber}
      </div>
      <div className="events-details__button">
        <Link
          className="events-details__link"
          to={`/events/${id}/comments`}
        ></Link>
        <img
          onClick={clickBack}
          className={`events-details__icon ${
            modalIsOpen === false ? "events-details__icon--back" : ""
          }`}
          src={arrowback}
        ></img>
      </div>

      <ul className="events-details__ul">
        {commentsList?.map((comment, index) => (
          <li
            className={`events-details__comments ${
              modalIsOpen === true && index === 3
                ? "events-details__comments--border"
                : ""
            }`}
            key={index}
          >
            {modalIsOpen && (
              <Comments
                comment={comment.comment}
                name={comment.name}
                isOpen={modalIsOpen}
                isClosed={handleCloseModal}
              />
            )}
          </li>
        ))}
      </ul>

      <div className="events-details__icon-container">
        <img
          onClick={handleCloseModal}
          className={`events-details__icon ${
            modalIsOpen === true ? "events-details__icon--visible" : ""
          }`}
          src={arrowback}
        ></img>
      </div>
    </section>
  );
};
export default EventsDetails;
