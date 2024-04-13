const router = require("express").Router();
const classesController = require("../controllers/classes-controller");

router
  .route("/classes")
  .post(classesController.postClasses)
  .get(classesController.getClassesList);

module.exports = router;
