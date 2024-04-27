const router = require("express").Router();
const ArticlesNewsController = require("../controllers/articlesNews-controller");

router
  .route("/news")
  .post(ArticlesNewsController.postArticlesAndNews)
  .get(ArticlesNewsController.getArticlesAndNewsList);
router.route("/news/:id").get(ArticlesNewsController.getSingleArticleNews);
module.exports = router;
