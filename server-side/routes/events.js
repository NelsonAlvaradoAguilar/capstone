const router = require("express").Router();
const eventsController = require("../controllers/events-controller");

router
  .route("/")
  //.post(eventsController.postEvents)
  .get(eventsController.getEvents);

router
  .route("/:id")
  .get(eventsController.getSingleEvent)
  .post(eventsController.postEvents);
router
  .route("/:id/comments")
  .get(eventsController.getEventsComments)
  .post(eventsController.postComment);

module.exports = router;
