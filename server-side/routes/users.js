const express = require("express");
const router = express.Router();
const upload = require("../midleware/upload.js");

const usersController = require("../controllers/users-controller");

router
  .route("/signup")
  .post(upload.single("images"), usersController.signup)
  .get(usersController.getUsers);

router.route("/login").post(usersController.login);

router
  .route("/profile")
  .get(usersController.authorize, usersController.getProfile);

router
  .route("/profile/logout")
  .post(usersController.authorize, usersController.logout);
module.exports = router;
