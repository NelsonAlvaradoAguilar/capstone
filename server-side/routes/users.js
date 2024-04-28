const router = require("express").Router();

const usersController = require("../controllers/users-controller");

router
  .route("/signup")
  .post(usersController.signup)
  .get(usersController.getUsers);

router.route("/login").post(usersController.login);

router
  .route("/profile")
  .get(usersController.authorize, usersController.getProfile);
router
  .route("/profile/logout")
  .post(usersController.authorize, usersController.logout);
module.exports = router;
