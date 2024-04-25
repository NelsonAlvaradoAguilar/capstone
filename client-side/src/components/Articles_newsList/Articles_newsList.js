import "./Articles_newsList.scss";

import { Link } from "react-router-dom";

const Articles_newsList = ({ articles_newsList }) => {
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
                <p className="articles-container__location">
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
