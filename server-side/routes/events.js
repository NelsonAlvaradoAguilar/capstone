const router = require("express").Router();
const eventsController = require("../controllers/events-controller");

router
  .route("/events")
  .post(eventsController.postEvents)
  .get(eventsController.getEvents);

module.exports = router;
