import { Link, useNavigate, useParams } from "react-router-dom";
import "./ArticlesNewsDetails.scss";
import { useEffect, useState } from "react";
import { getSigleArticleNews } from "../../Api-tools/Api-tools";
import arrowback from "../../assets/icons/icons8-back-arrow-64.png";

const ArticlesNewsDetails = (params) => {
  const { id } = useParams();
  const [singleArticleNews, setSingleArticleNews] = useState({});
  const navigate = useNavigate();
  const clickBack = () => {
    navigate(-1);
  };
  const getSingleArticlesNewsData = async () => {
    try {
      const resp = await getSigleArticleNews(id);

      setSingleArticleNews(resp);
    } catch (error) {
      console.error(`Error fetching single class ${id}:`, error);
    }
  };
  const date = new Date(singleArticleNews.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    getSingleArticlesNewsData();
  }, [id]);

  return (
    <section className="articlel-details">
      <h1 className="articlel-details__title">{singleArticleNews.title}</h1>
      <img
        className="articlel-details__img"
        src={singleArticleNews.images}
      ></img>
      <p className="articlel-details__description">
        {singleArticleNews?.description}
      </p>
      <div className="articlel-details__content">
        <h3 className="articlel-details__subtitle">Date:</h3>
        <p>{formattedDate}</p>
        <h3 className="articlel-details__subtitle">Location:</h3>
        <p>{singleArticleNews.location}</p>
      </div>
      <h2 className="articlel-details__subtitle articlel-details__subtitle--section">
        Contact information:
      </h2>
      <div className="articlel-details__content">
        <h3 className="articlel-details__subtitle">Name:</h3>
        <p>{singleArticleNews.contact_name}</p>
      </div>
      <div className="articlel-details__content">
        <h3 className="articlel-details__subtitle">Phone: </h3>
        <p>{singleArticleNews.phone}</p>
      </div>
      <div className="articlel-details__content">
        <h3 className="articlel-details__subtitle">Email:</h3>
        <p>{singleArticleNews.email}</p>
      </div>
      <div className="articlel-details__btn-container">
        <img
          onClick={clickBack}
          className="articlel-details__icon"
          src={arrowback}
        ></img>{" "}
      </div>
    </section>
  );
};
export default ArticlesNewsDetails;
