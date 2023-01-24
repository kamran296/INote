const express = require("express");

const userController = require("./../../controller/userController");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router
  .route("/", [
    body("name").isLength({ min: 3 }),
    body("email", "Enter a valaid email").isEmail(),
    body("password", "create a strong password").isLength({ min: 5 }),
  ])
  .post(userController.createUser);

module.exports = router;
