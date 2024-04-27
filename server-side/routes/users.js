const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router
  .route("/signup")
  .post(usersController.signup)
  .get(usersController.getUsers);

router
  .route("/login")
  .post(usersController.login)
  .get(usersController.getProfile);
//router.route("/login").post(usersController.login);
router
  .route("/login/profile")
  .get(usersController.getProfile, usersController.authorize);
module.exports = router;
