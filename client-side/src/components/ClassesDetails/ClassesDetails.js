import React, { useEffect, useState } from "react";
import "./ClassesDetail.scss";
import { getClasses } from "../../Api-tools/Api-tools";
const ClassesDetails = ({ classes }) => {
  return (
    <section className="details">
      <div>
        {" "}
        <h1>{classes?.title}</h1>
        <img src={classes?.images}></img>
      </div>
      <h2>{classes?.description}</h2>
      <h2>{classes?.date}</h2>
      <h2>{classes?.location}</h2>

      <h2>{classes?.instructor}</h2>
      <div>
        <h2>Comments</h2>
      </div>
      <button>Resgister to this class</button>
    </section>
  );
};
export default ClassesDetails;
