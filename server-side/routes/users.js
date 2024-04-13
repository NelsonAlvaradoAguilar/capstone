const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router
  .route("/register")
  .post(usersController.signup)
  .get(usersController.getUsers);

//router.route("/login").post(usersController.login);

module.exports = router;
