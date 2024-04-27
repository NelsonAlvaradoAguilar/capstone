const router = require("express").Router();
const classesController = require("../controllers/classes-controller");

router
  .route("/classes")
  .post(classesController.postClasses)
  .get(classesController.getClassesList);

router.route("/classes/:id").get(classesController.getSingleClass);

module.exports = router;
