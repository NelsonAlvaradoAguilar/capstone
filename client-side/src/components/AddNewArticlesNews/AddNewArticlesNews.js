import { useState } from "react";
import { postArticlesNews } from "../../Api-tools/Api-tools";
import "./AddNewArticlesNews.scss";
import { apiUrl } from "../../Api-tools/Api-tools";
import { useNavigate } from "react-router-dom";

const AddNewArticlesNews = ({ user_id }) => {
  console.log(user_id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [contact_name, setContact_name] = useState("");
  const [images, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const calcel = () => {
    navigate("/news");
  };
  const handleArticlesAndNew = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("contact_name", contact_name);
      formData.append("images", images);

      const resp = await postArticlesNews(formData, user_id);
      navigate("/news");
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
  const handleOnChangeLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleOnChangeContac_name = (e) => {
    setContact_name(e.target.value);
    console.log(contact_name);
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];

    setImage(file);
  };

  return (
    <section className="add-articles-news">
      <h1 className="add-articles-news__title">Post a new donations or news</h1>
      <form className="add-articles-news__form" onSubmit={handleArticlesAndNew}>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Title:
            <input
              onChange={handleOnChangeTitle}
              placeholder="Title"
              value={title}
              name="title"
              id="title"
              className="add-articles-news__input-field"
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Description:
            <input
              onChange={handleOnChangeDescription}
              value={description}
              placeholder="Description"
              name="description"
              className="add-articles-news__input-field"
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Location:
            <input
              onChange={handleOnChangeLocation}
              placeholder="Location"
              value={location}
              name="location"
              className="add-articles-news__input-field"
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            contact name:
            <input
              onChange={handleOnChangeContac_name}
              placeholder="Contact name"
              value={contact_name}
              name="contact-name"
              className="add-articles-news__input-field"
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Email:
            <input
              onChange={handleOnChangeEmail}
              placeholder="Email"
              value={email}
              name="email"
              className="add-articles-news__input-field"
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Phone:
            <input
              onChange={handleOnChangePhone}
              value={phone}
              name="phone"
              placeholder="Phone"
              className="add-articles-news__input-field "
            />
          </label>
        </div>
        <div className="add-articles-news__imput-container">
          {" "}
          <label className="add-articles-news__label">
            Image:
            <input
              onChange={handleOnChangeImage}
              name="images"
              className="add-articles-news__input-field add-articles-news__input-field--img"
              type="file"
              accept="image/*"
            />
          </label>
        </div>
        <div className="add-articles-news__btn-container">
          <button
            onClick={calcel}
            className="add-articles-news__btn-post add-articles-news__btn-post--cancel"
          >
            cancel
          </button>
          <button type="submit" className="add-articles-news__btn-post ">
            Post
          </button>
        </div>
      </form>
    </section>
  );
};
export default AddNewArticlesNews;
