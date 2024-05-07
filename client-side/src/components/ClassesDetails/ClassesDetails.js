import React, { useEffect, useState } from "react";
import "./ClassesDetail.scss";
import { getSigleClass } from "../../Api-tools/Api-tools";
import { useParams } from "react-router-dom";
import RegisteringForAClass from "../ClassRegistration/ClassRegistration";
const ClassesDetails = ({ user_id }) => {
  const { id } = useParams();
  const [singleClass, setSingleClass] = useState({});

  const getSingleClassData = async () => {
    try {
      const resp = await getSigleClass(id);

      setSingleClass(resp);
    } catch (error) {
      console.error(`Error fetching single class ${id}:`, error);
    }
  };

  useEffect(() => {
    getSingleClassData();
  }, [id]);

  return (
    <section className="details">
      <h1 className="details__title">{singleClass?.title}</h1>
      <img className="details__img" src={singleClass?.images}></img>
      <div className="details__contentContainer">
        <p className="details__description">{singleClass?.description}</p>
        <div className="details__content">
          <h3>Date:</h3>
          <p>{singleClass?.date}</p>
        </div>
        <div className="details__content">
          <h3>Location:</h3>
          <p>{singleClass?.location}</p>
        </div>
        <div className="details__content">
          <h3>Instructor:</h3>
          <p>{singleClass?.instructor}</p>
        </div>
      </div>

      <RegisteringForAClass class_id={id} user_id={user_id} />
    </section>
  );
};
export default ClassesDetails;
