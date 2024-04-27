import React from "react";
import "./Comments.scss";
const Comments = ({ comment, name, isOpen, isClosed, id }) => {
  {
    if (!isOpen) {
      return;
    }
  }
  return (
    <section className="comments">
      <div className="comments__container">
        <h3 className="comments__name">{name}</h3>
        <p className="comments__comment">{comment}</p>
      </div>
    </section>
  );
};
export default Comments;
//
