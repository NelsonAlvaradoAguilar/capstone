import { useNavigate, useParams } from "react-router-dom";
import "./ArticlesNewsDetails.scss";
import { useCallback, useEffect, useState } from "react";
import { getSigleArticleNews } from "../../Api-tools/Api-tools";
import arrowback from "../../assets/icons/icons8-back-arrow-64.png";

const ArticlesNewsDetails = () => {
  const { id } = useParams();
  const [singleArticleNews, setSingleArticleNews] = useState({});
  const navigate = useNavigate();

  const clickBack = () => {
    navigate(-1);
  };

  const getSingleArticlesNewsData = useCallback(async () => {
    try {
      const resp = await getSigleArticleNews(id);
      setSingleArticleNews(resp);
    } catch (error) {
      console.error(`Error fetching single article ${id}:`, error);
    }
  }, [id]);
  useEffect(() => {
    getSingleArticlesNewsData();
  }, [getSingleArticlesNewsData]);
  if (!singleArticleNews.title) {
    return <p>Loading article details...</p>;
  }

  const date = new Date(singleArticleNews.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="article-details">
      <h1 className="article-details__title">{singleArticleNews.title}</h1>
      <img
        className="article-details__img"
        src={singleArticleNews.images}
        alt={singleArticleNews.title || "Article Image"}
      />
      <p className="article-details__description">
        {singleArticleNews.description}
      </p>
      <div className="article-details__content">
        <h3 className="article-details__subtitle">Date:</h3>
        <p>{formattedDate}</p>
        <h3 className="article-details__subtitle">Location:</h3>
        <p>{singleArticleNews.location}</p>
      </div>
      <h2 className="article-details__subtitle article-details__subtitle--section">
        Contact information:
      </h2>
      <div className="article-details__content">
        <h3 className="article-details__subtitle">Name:</h3>
        <p>{singleArticleNews.contact_name}</p>
      </div>
      <div className="article-details__content">
        <h3 className="article-details__subtitle">Phone:</h3>
        <p>{singleArticleNews.phone}</p>
      </div>
      <div className="article-details__content">
        <h3 className="article-details__subtitle">Email:</h3>
        <p>{singleArticleNews.email}</p>
      </div>
      <div className="article-details__btn-container">
        <img
          onClick={clickBack}
          className="article-details__icon"
          src={arrowback}
          alt="Back"
        />
      </div>
    </section>
  );
};

export default ArticlesNewsDetails;
