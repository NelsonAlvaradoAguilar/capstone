import "./Articles_newsList.scss";
import arrowback from "../../assets/icons/icons8-back-arrow-64.png";
import { Link, useNavigate } from "react-router-dom";

const Articles_newsList = ({ articles_newsList }) => {
  const navigate = useNavigate();
  const clickBack = () => {
    navigate("/news");
  };
  return (
    <section className="articles-container">
      {
        <ul className="articles-container__ul">
          {articles_newsList?.map((articles) => (
            <li className="articles-container__list" key={articles.id}>
              {" "}
              <Link
                className="articles-container__link"
                to={`/news/${articles.id}`}
              >
                <img
                  className="articles-container__img"
                  src={articles.images}
                ></img>
                <h3 className="articles-container__subtitle">
                  {articles.title}
                </h3>
                <p className="articles-container__subtitle--location">
                  {articles.location}
                </p>
              </Link>{" "}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default Articles_newsList;
