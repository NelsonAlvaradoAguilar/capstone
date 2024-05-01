import { Link } from "react-router-dom";
import "./ClassesList.scss";

const ClassesList = (props) => {
  const list = props.list;

  return (
    <section className="classesList">
      <div className="classesList__header-container">
        {" "}
        <h1 className="classesList__title">Classes available</h1>
      </div>
      <ul className="classesList__container">
        {list.map((classes) => (
          <li className="classesList__list" key={classes?.id}>
            <Link className="classesList__link" to={`/classes/${classes.id}`}>
              {" "}
              <img
                className="classesList__images"
                alt="/"
                src={classes?.images}
              ></img>
              <h1 className="classesList__subtitle">{classes?.title}</h1>
            </Link>
          </li>
        ))}
      </ul>{" "}
    </section>
  );
};
export default ClassesList;
