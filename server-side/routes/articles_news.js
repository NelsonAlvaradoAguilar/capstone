const express = require("express");
const router = require("express").Router();
const upload = require("../midleware/upload.js");
const ArticlesNewsController = require("../controllers/articlesNews-controller");

router
  .route("/")

  .get(ArticlesNewsController.getArticlesAndNewsList);
router
  .route("/:id")
  .get(ArticlesNewsController.getSingleArticleNews)
  .post(upload.single("images"), ArticlesNewsController.postArticlesAndNews);
module.exports = router;
