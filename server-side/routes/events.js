const router = require("express").Router();
const eventsController = require("../controllers/events-controller");

router
  .route("/events")
  .post(eventsController.postEvents)
  .get(eventsController.getEvents);

router.route("/events/:id").get(eventsController.getSingleEvent);
router
  .route("/events/:id/comments")
  .get(eventsController.getEventsComments)
  .post(eventsController.postComment);

module.exports = router;
