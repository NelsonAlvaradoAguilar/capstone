import { useState } from "react";
import { postNewComment } from "../../Api-tools/Api-tools";
import "./PostComments.scss";
import { useNavigate, useParams } from "react-router-dom";

const PostAComments = () => {
  const navigate = useNavigate();
  const handleBackClick = (e) => {
    navigate(-1);
  };
  const cancel = () => {
    navigate("/events");
  };

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams(null);
  const handleComment = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const resp = await postNewComment(name, comment, id);
      handleBackClick();
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(`error posting ${error}`);
    }
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleOnChangeComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  return (
    <section className="post-comments">
      <h1 className="post-comments__title">Comment</h1>
      <form className="post-comments__form" onSubmit={handleComment}>
        <div className="post-commentst__imput-container">
          {" "}
          <label className="post-comments__label">
            Name:
            <input
              onChange={handleOnChangeName}
              placeholder=" Name"
              value={name}
              name=" name"
              id=" name"
              className="post-comments__input-field"
            />
          </label>
        </div>
        <div className="post-comments__imput-container">
          {" "}
          <label className="post-comments__label">
            comment:
            <input
              onChange={handleOnChangeComment}
              value={comment}
              placeholder="Comment"
              name="comment"
              className="post-comments__input-field"
            />
          </label>
        </div>
        <div className="post-comments__post-btn-container">
          {" "}
          <button
            onClick={cancel}
            className="post-comments__post-btn post-comments__post-btn--cancel"
          >
            cancel
          </button>
          <button className="post-comments__post-btn">post</button>
        </div>
      </form>
    </section>
  );
};
export default PostAComments;
