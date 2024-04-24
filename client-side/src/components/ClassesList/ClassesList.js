import { Link } from "react-router-dom";
import "./ClassesList.scss";

const ClassesList = (props) => {
  const list = props.list;
  console.log(list);
  return (
    <section className="classesList">
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
              <h1 className="classesList__title">{classes?.title}</h1>
              <div>{"rate"}</div>
            </Link>
          </li>
        ))}
      </ul>{" "}
    </section>
  );
};
export default ClassesList;
