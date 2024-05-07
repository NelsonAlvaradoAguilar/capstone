import "./PostNewClass.scss";
import { apiUrl, apiEndpoint, postNewClass } from "../../Api-tools/Api-tools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostNewClasses = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [instructor, setInstructor] = useState("");
  const [date, setDate] = useState("");
  const [images, setImage] = useState("");
  const navigate = useNavigate();
  const calcel = () => {
    navigate("/classes");
  };
  const handleNewClasses = async (e) => {
    e.preventDefault();

    try {
      const resp = await postNewClass(
        title,
        description,
        location,
        instructor,
        date,
        images
      );
      console.log(resp);
    } catch (error) {
      console.log(`error posting ${error}`);
    }
  };
  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };
  const handleOnChangeLocatio = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const handleOnChangeInstructor = (e) => {
    setInstructor(e.target.value);
    console.log(instructor);
  };
  const handleOnChangeDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    const imagePath = `${apiUrl}/images/${file.name}`;
    setImage(imagePath);
    console.log(imagePath);
  };

  return (
    <section className="add-classes">
      <h1 className="add-classes__title">Add a new class</h1>
      <form className="add-classes__form" onSubmit={handleNewClasses}>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Title:
            <input
              onChange={handleOnChangeTitle}
              placeholder="Title"
              value={title}
              name="title"
              id="title"
              className="add-classes__input-field"
            />
          </label>
        </div>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Description:
            <input
              onChange={handleOnChangeDescription}
              value={description}
              placeholder="Description"
              name="description"
              className="add-classes__input-field"
            />
          </label>
        </div>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Location:
            <input
              onChange={handleOnChangeLocatio}
              placeholder="Location"
              value={location}
              name="location"
              className="add-classes__input-field"
            />
          </label>
        </div>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Instructor:
            <input
              onChange={handleOnChangeInstructor}
              placeholder="Instructor"
              value={instructor}
              name="instructor"
              className="add-classes__input-field"
            />
          </label>
        </div>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Date:
            <input
              onChange={handleOnChangeDate}
              placeholder="Date"
              value={date}
              name="date"
              className="add-classes__input-field"
            />
          </label>
        </div>
        <div className="add-classes__imput-container">
          {" "}
          <label className="add-classes__label">
            Image:
            <input
              onChange={handleOnChangeImage}
              name="image"
              className="add-classes__input-field add-classes__input-field--img"
              type="file"
            />
          </label>
        </div>
        <div className="add-classes__btn-container">
          <button
            onClick={calcel}
            className="add-classes__btn-post add-classes__btn-post--cancel"
          >
            cancel
          </button>
          <button type="submit" className="add-classes__btn-post ">
            Post
          </button>
        </div>
      </form>
    </section>
  );
};
export default PostNewClasses;
