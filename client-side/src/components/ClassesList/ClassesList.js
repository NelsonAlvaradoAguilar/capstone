import { Link } from "react-router-dom";
import "./ClassesList.scss";

const ClassesList = ({ list }) => {
  console.log(list);

  return (
    <section className="list">
      <ul>
        {list.map((classes) => (
          <li key={classes.id}>
            <img className="list__images" alt="/" src={classes.images}></img>
            <Link to={`/classes/${classes.id}`}>
              <h1>{classes.title}</h1>
              <div>{"rate"}</div>
            </Link>
          </li>
        ))}
      </ul>{" "}
    </section>
  );
};
export default ClassesList;
