const knex = require("knex")(require("../knexfile"));

const getArticlesAndNewsList = async (req, res) => {
  try {
    const articlesNews = await knex("articles_news");
    const updatedArticles = articlesNews.map((newsData) => {
      const imagePath = newsData.images.replace("public/", "");
      return {
        ...newsData,
        images: `http://localhost:8080/${imagePath}`, // Update to your server URL if different
      };
    });
    res.status(200).json(updatedArticles);
  } catch (err) {
    res.status(400).send(`Error retrieving user: ${err}`);
  }
};
const getSingleArticleNews = async (req, res) => {
  try {
    const articlesNews = await knex("articles_news")
      .where({
        id: req.params.id,
      })
      .first();

    if (!articlesNews) {
      return res.status(404).json({
        message: `Articles or news with ID ${req.params.id} not found`,
      });
    }
    const imagePath = articlesNews.images.replace("public/", "");

    const articlesNewsData = {
      id: articlesNews.id,
      title: articlesNews.title,
      description: articlesNews.description,
      location: articlesNews.location,
      contact_name: articlesNews.contact_name,
      email: articlesNews.email,
      phone: articlesNews.phone,
      images: `http://localhost:8080/${imagePath}`,
    };
    res.status(200).json(articlesNewsData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve data for articles and news with ID ${req.params.id}`,
    });
  }
};
const postArticlesAndNews = async (req, res) => {
  const { title, description, location, contact_name, email, phone } = req.body;
  const userId = req.params.id;
  const imagePath = req.file
    ? `images/${req.file.filename}`
    : "images/default_image.jpg";

  console.log("Request body:", req.body);
  console.log("Request file:", req.file);
  console.log("Request params:", req.params);
  if (
    !title ||
    !description ||
    !location ||
    !contact_name ||
    !email ||
    !phone ||
    !userId
  ) {
    return res.status(400).json({
      message: `Please provide all required information`,
    });
  }

  try {
    const newArticles = await knex("articles_news").insert({
      title,
      description,
      location,
      email,
      contact_name,
      phone,
      images: imagePath,
      user_id: userId,
    });

    const newArticlesAndNewsId = newArticles[0];
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
