const express = require("express");
const router = express.Router();
const upload = require("../midleware/upload.js");
const eventsController = require("../controllers/events-controller");

router.route("/").get(eventsController.getEvents);

router
  .route("/:id")
  .get(eventsController.getSingleEvent)
  .post(upload.single("images"), eventsController.postEvents);

router
  .route("/:id/comments")
  .get(eventsController.getEventsComments)
  .post(eventsController.postComment);

module.exports = router;
