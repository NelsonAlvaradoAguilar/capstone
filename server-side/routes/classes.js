const express = require("express");
const router = express.Router();
const upload = require("../midleware/upload.js");
const classesController = require("../controllers/classes-controller");

router
  .route("/")

  .get(classesController.getClassesList);

router
  .route("/:id")
  .get(classesController.getSingleClass)
  .post(upload.single("images"), classesController.postClasses);
router.route("/:id/feedback").post(classesController.registerToClass);
router.route("/:id/register").post(classesController.registerToClass);
module.exports = router;
