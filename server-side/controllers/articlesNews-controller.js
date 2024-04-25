const knex = require("knex")(require("../knexfile"));

const events = {};

const getArticlesAndNewsList = async (req, res) => {
  try {
    const articlesNews = await knex("articles_news");
    res.status(200).json(articlesNews);
  } catch (err) {
    res.status(400).send(`Error retrieving user: ${err}`);
  }
};
const getSingleArticleNews = async (req, res) => {
  try {
    const foundArticlesNews = await knex("articles_news").where({
      id: req.params.id,
    });

    if (foundArticlesNews.length === 0) {
      return res.status(404).json({
        message: `Articles or news with ID ${req.params.id} not found`,
      });
    }

    const articlesNewsData = foundArticlesNews[0];
    res.status(200).json(articlesNewsData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for articles and news with ID ${req.params.id}`,
    });
  }
};
const postArticlesAndNews = async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.location ||
    !req.body.images ||
    !req.body.contact_name ||
    !req.body.email ||
    !req.body.phone
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const result = await knex("articles_news").insert(req.body);

    const newArticlesAndNewsId = result[0];
    const createdArticlesAndNews = await knex("articles_news").where({
      id: newArticlesAndNewsId,
    });

    res.status(201).json(createdArticlesAndNews);
  } catch (error) {
    res.status(500).json({
      message: `Unable to post new article or news: ${error}`,
    });
  }
};

module.exports = {
  postArticlesAndNews,
  getSingleArticleNews,
  getArticlesAndNewsList,
};
