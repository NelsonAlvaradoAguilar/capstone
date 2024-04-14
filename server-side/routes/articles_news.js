const router = require("express").Router();
const ArticlesNewsController = require("../controllers/articlesNews-controller");

router
  .route("/news")
  .post(ArticlesNewsController.postArticlesAndNews)
  .get(ArticlesNewsController.getArticlesAndNewsList);

module.exports = router;
