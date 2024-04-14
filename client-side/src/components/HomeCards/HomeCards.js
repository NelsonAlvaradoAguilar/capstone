import "./HomeCards.scss";

const HomeCards = ({ title, image }) => {
  return (
    <section className="homeCards">
      <h1>{title}</h1>
      <img src={image}></img>
    </section>
  );
};

export default HomeCards;
