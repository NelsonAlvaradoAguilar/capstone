import "./ArticlesNewsPage.scss";

import Articles_newsList from "../../components/Articles_newsList/Articles_newsList";
import { getArticles_news } from "../../Api-tools/Api-tools";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesNewsPage = (params) => {
  const [articles_news, setArticles_news] = useState([]);
  const getArticlesNewsList = async () => {
    try {
      const resp = await getArticles_news();
      setArticles_news(resp);
    } catch (error) {
      console.log(`this error ${error}`);
    }
  };
  useEffect(() => {
    getArticlesNewsList();
  }, []);

  return (
    <section className="articles-news">
      <h1 className="articles-news__title">Donations and News </h1>

      <Articles_newsList articles_newsList={articles_news} />
    </section>
  );
};

export default ArticlesNewsPage;
