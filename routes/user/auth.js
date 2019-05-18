const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/login")
  .post(authController.logIn);

router.route("/register")
  .post(authController.register);

router.route("/logout")
  .get(authController.logOut);

module.exports = router;