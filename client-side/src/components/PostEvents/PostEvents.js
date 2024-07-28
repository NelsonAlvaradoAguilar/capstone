import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostEvents.scss";
import { apiUrl, postEvent } from "../../Api-tools/Api-tools";

function PostAnEvent({ user_id: user_id }) {
  console.log(user_id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [entrance, setEntrance] = useState("No");
  const [price, setPrice] = useState("0");
  const [date, setDate] = useState("");
  const [images, setImages] = useState(null);
  //const [user_id, setUser_id] = useState(user_id);
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
      const formDat = new FormData();
      formDat.append("title", title);
      formDat.append("description", description);
      formDat.append("date", date);
      formDat.append("price", price);
      formDat.append("entrance", entrance);
      formDat.append("location", location);
      formDat.append("images", images);

      const resp = await postEvent(formDat, user_id);
      console.log(formDat);
      calcel();
      console.log(resp);
    } catch (error) {
      console.log(`error posting ${error}`);
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
    setImages(file);
    console.log(file);
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
                  placeholder="$0.00"
                  name="Price"
                  id="Price"
                  type="number"
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
                name="images"
                onChange={handleOnChangeImage}
                accept="image/*"
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
          <button type="submit" className="post-event__post-btn">
            post{" "}
          </button>
        </div>
      </form>
    </section>
  );
}
export default PostAnEvent;
