import { Link } from "react-router-dom";
import "./CardList.scss";
import { useState } from "react";
const CardsList = ({ cards }) => {
  const [zoomImg, setZoomImg] = useState(false);
  console.log(cards);

  const zoom = () => {
    setZoomImg(true);
  };
  return (
    <section className="cards">
      {" "}
      <img className="cards__img " alt="/" src={cards?.images}></img>
      <h1 className="cards__subtitle">{cards?.title}</h1>
      <p className="cards__subtitle cards__subtitle--location">
        {cards?.location}
      </p>
    </section>
  );
};
export default CardsList;
