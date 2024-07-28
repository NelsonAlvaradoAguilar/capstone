import "./PostNewClass.scss";
import { apiUrl, apiEndpoint, postNewClass } from "../../Api-tools/Api-tools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostNewClasses = ({ user_id: user_id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [instructor, setInstructor] = useState("");
  const [date, setDate] = useState("");
  const [images, setImage] = useState(null);
  const navigate = useNavigate();
  const cancel = () => {
    navigate("/classes");
  };
  const handleNewClasses = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("location", location);
      formData.append("instructor", instructor);
      formData.append("images", images);

      const resp = await postNewClass(formData, user_id);
      navigate("/classes");
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

    setImage(file);
    console.log(file);
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
              name="images"
              className="add-classes__input-field add-classes__input-field--img"
              type="file"
              accept="image/*"
            />
          </label>
        </div>
        <div className="add-classes__btn-container">
          <button
            onClick={cancel}
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
