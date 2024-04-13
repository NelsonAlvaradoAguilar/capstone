const router = require("express").Router();
const ArticlesNewsController = require("../controllers/articlesNews-controller");

router
  .route("/articles")
  .post(ArticlesNewsController.postArticlesAndNews)
  .get(ArticlesNewsController.getArticlesAndNewsList);

module.exports = router;
