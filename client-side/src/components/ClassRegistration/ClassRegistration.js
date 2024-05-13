import ArrowBack from "../../assets/icons/icons8-back-arrow-64.png";
import { useEffect, useState } from "react";
import { Register, feedBack } from "../../Api-tools/Api-tools";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ClassRegistration.scss";
import axios from "axios";
const RegisteringForAClass = ({ class_id, user_id, userInfo, class_info }) => {
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [comment, setComment] = useState();
  console.log(userInfo);
  console.log(user_id);
  console.log(class_info);
  const navigate = useNavigate();
  const clickBack = () => {
    navigate(-1);
  };
  const registerTo = async () => {
    try {
      const resp = await Register(class_id, user_id);
      setRegistrationStatus("success");
    } catch (error) {
      setRegistrationStatus("error");
      console.error("Error registering for class:", error);
    }
  };
  const handleFeeback = async (e) => {
    e.preventDefault();
    try {
      const resp = await feedBack(class_id, user_id, comment);
      clickBack();
      return resp;
    } catch (error) {
      console.log(`error posting ${error}`);
    }
  };
  const handleOnChangeComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <section>
      {registrationStatus === "loading" && <div>Loading...</div>}

      <div className="register">
        {registrationStatus === "success" && (
          <div>
            {" "}
            `Registered user {userInfo.name} to class {class_info.title}{" "}
            successfully!`
          </div>
        )}
        <div
          className={`register__btn ${
            registrationStatus === "success" ? "register__btn--succes" : ""
          }`}
          onClick={registerTo}
        >
          Register
        </div>

        <div className="register__comment">
          <h1>Feedback</h1>
          <form onSubmit={handleFeeback} className="register__form">
            <label className="register__label">
              <input
                onChange={handleOnChangeComment}
                className="register__imput"
              />
            </label>
            <button className="register__button">Leave a feedback</button>
          </form>
        </div>
      </div>
      <div className="register__btn-container">
        <img
          onClick={clickBack}
          className="register__img"
          src={ArrowBack}
        ></img>
      </div>
    </section>
  );
};
export default RegisteringForAClass;
