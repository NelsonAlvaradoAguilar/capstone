import { Link } from "react-router-dom";
import "./ClassesList.scss";

const ClassesList = (props) => {
  const list = props.list;

  return (
    <section className="classesList">
      <ul className="classesList__ul">
        {list.map((classes) => (
          <li className="classesList__list" key={classes?.id}>
            <Link className="classesList__link" to={`/classes/${classes.id}`}>
              {" "}
              <img
                className="classesList__img "
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
