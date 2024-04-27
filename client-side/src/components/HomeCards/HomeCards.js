import "./HomeCards.scss";

const HomeCards = ({ title, image }) => {
  return (
    <section className="homeCards">
      <img className="homeCards__image" src={image}></img>
    </section>
  );
};

export default HomeCards;
