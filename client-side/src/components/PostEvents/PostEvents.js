import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostEvents.scss";
import { apiUrl, postEvent } from "../../Api-tools/Api-tools";

function PostAnEvent(params) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [entrance, setEntrance] = useState("No");
  const [price, setPrice] = useState("0");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const calcel = () => {
    navigate("/events");
  };
  const clickBack = (e) => {
    navigate(-1);
  };
  const handlePostNewEvent = async (e) => {
    e.preventDefault();
    try {
      const resp = await postEvent(
        title,
        description,
        date,
        price,
        entrance,
        location,
        image
      );
      clickBack();
      console.log(resp);
      // return resp.data;
    } catch (error) {
      console.log(`error posting ${error}`);
    }
    if (
      !title ||
      !description ||
      !date ||
      !price ||
      !entrance ||
      !location ||
      !image
    ) {
      alert("Please complete all fields to post new event");
      return;
    }
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
    console.log(e.target.value);
  };
  const handleOnChangeLocation = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };
  const handleOnChangeEntrance = (e) => {
    if (e.target.value === "No") {
      setEntrance("");
    }
    setEntrance(e.target.value);
    console.log(e.target.value);
  };
  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    const imagePath = `${apiUrl}/images/${file.name}`;
    setImage(imagePath);
    console.log(imagePath);
  };
  const handleOnPriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <section className="post-event">
      <h1 className="post-event__title">New Event</h1>

      <form onSubmit={handlePostNewEvent} className="post-event__form">
        <div className="post-event__input-container ">
          <label className="post-event__form-subtitle">
            Title:
            <div className="post-event__input">
              <input
                className="post-event__input-field"
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                value={title}
                onChange={handleOnChangeTitle}
              />
            </div>
          </label>
        </div>
        <div className="post-event__input-container ">
          <label className="post-event__form-subtitle">
            Date:
            <div className="post-event__input">
              <input
                className="post-event__input-field"
                type="text"
                placeholder="Date"
                name="Date"
                id="Date"
                value={date}
                onChange={handleOnChangeDate}
              />
            </div>
          </label>
        </div>
        <div className="post-event__input-container ">
          <label className="post-event__form-subtitle">
            Location:
            <div className="post-event__input">
              <input
                className="post-event__input-field"
                type="text"
                placeholder=" Location"
                name="Location"
                id=" Location"
                value={location}
                onChange={handleOnChangeLocation}
              />
            </div>
          </label>
        </div>
        <div className="post-event__input-container ">
          <label className="post-event__form-subtitle">
            Description
            <div className="post-event__input">
              <input
                className="post-event__input-field "
                type="text"
                placeholder="Event description..."
                name="description"
                id="description"
                onChange={handleOnChangeDescription}
                value={description}
              />
            </div>
          </label>
        </div>
        <div className=" post-event__input-container post-event__input-container--entrance">
          {" "}
          <h1>Entrance</h1>
          <input
            onChange={handleOnChangeEntrance}
            type="radio"
            id="entrance"
            value="Yes"
            checked={entrance === "Yes"}
            className="post-event__input "
          />
          <label htmlFor="Yes" className="post-event__form-subtitle ">
            {"Yes"}
          </label>
          <input
            onChange={handleOnChangeEntrance}
            className="post-event__input "
            id="No"
            type="radio"
            value="No"
            checked={entrance === "No"}
          />
          <label htmlFor="No" className="post-event__form-subtitle">
            {"Free "}
          </label>
          {entrance === "Yes" && (
            <label className="post-event__form-subtitle">
              Price
              <div className="post-event__input">
                <input
                  className="post-event__input-field"
                  type="number"
                  placeholder="$0.00"
                  name="Price"
                  id="Price"
                  onChange={handleOnPriceChange}
                  value={price}
                />
              </div>
            </label>
          )}
        </div>

        <div className="post-event__input-container">
          <label className="post-event__form-subtitle">
            Image
            <div className="post-event__input">
              <input
                className="post-event__input-field post-event__input-field--img "
                type="file"
                placeholder="Upload an image."
                name="image"
                id="image"
                onChange={handleOnChangeImage}
              />
            </div>
          </label>
        </div>

        <div className="post-event__btn">
          <button
            className="post-event__post-btn post-event__post-btn--cancel"
            onClick={calcel}
          >
            {" Cancel"}
          </button>
          <button className="post-event__post-btn">post </button>
        </div>
      </form>
    </section>
  );
}
export default PostAnEvent;
