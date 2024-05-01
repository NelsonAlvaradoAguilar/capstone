const router = require("express").Router();
const classesController = require("../controllers/classes-controller");

router
  .route("/classes")
  .post(classesController.postClasses)

  .get(classesController.getClassesList);

router.route("/classes/:id").get(classesController.getSingleClass);
router.route("/classes/:id/feedback").post(classesController.registerToClass);
router.route("/classes/:id/register").post(classesController.registerToClass);
module.exports = router;
